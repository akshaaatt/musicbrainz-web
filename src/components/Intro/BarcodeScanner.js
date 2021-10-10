import React, {createElement, useCallback, useEffect, useRef} from "react";
import { BrowserMultiFormatReader } from "@zxing/library";
import Webcam from "react-webcam";

const BarcodeScanner = ({
        onUpdate,
        onError,
        width = "100%",
        height = "100%",
        facingMode = "environment",
        torch, delay = 500,
        videoConstraints, stopStream
    }) => {
    const webcamRef = useRef(null);

    const capture = useCallback(() => {
        let _a;
        const codeReader = new BrowserMultiFormatReader();
        const imageSrc = (_a = webcamRef === null || webcamRef === void 0 ? void 0 : webcamRef.current) === null || _a === void 0 ? void 0 : _a.getScreenshot();
        if (imageSrc) {
            codeReader
                .decodeFromImage(undefined, imageSrc)
                .then((result) => {
                    onUpdate(null, result);
                })
                .catch((err) => {
                    onUpdate(err);
                });
        }
    }, [onUpdate]);
    useEffect(() => {
        let _a, _b;
        // Turn on the flashlight if prop is defined and device has the capability
        if (typeof torch === "boolean" &&
            (
                // @ts-ignore
                (_a = navigator === null || navigator === void 0 ? void 0 : navigator.mediaDevices) === null || _a === void 0 ? void 0 : _a.getSupportedConstraints().torch)) {
            const stream = (_b = webcamRef === null || webcamRef === void 0 ? void 0 : webcamRef.current) === null || _b === void 0 ? void 0 : _b.video.srcObject;
            const track = stream === null || stream === void 0 ? void 0 : stream.getVideoTracks()[0]; // get the active track of the stream
            if (track &&
                track.getCapabilities().torch &&
                !track.getConstraints().torch) {
                track
                    .applyConstraints({
                        advanced: [{ torch }],
                    })
                    .catch((err) => onUpdate(err));
            }
        }
    }, [torch, onUpdate]);
    React.useEffect(() => {
        var _a;
        if (stopStream) {
            let stream = (_a = webcamRef === null || webcamRef === void 0 ? void 0 : webcamRef.current) === null || _a === void 0 ? void 0 : _a.video.srcObject;
            if (stream) {
                stream.getTracks().forEach((track) => {
                    stream.removeTrack(track);
                    track.stop();
                });
                stream = null;
            }
        }
    }, [stopStream]);
    useEffect(() => {
        const interval = setInterval(capture, delay);
        return () => {
            clearInterval(interval);
        };
    }, []);
    return (createElement(Webcam, { width: width, height: height, ref: webcamRef, screenshotFormat: "image/jpeg", videoConstraints: videoConstraints || {
            facingMode,
        }, audio: false, onUserMediaError: onError }));
};
export default BarcodeScanner;
