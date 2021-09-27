import * as React from "react"

import styles from "@/styles/modules/TrustedCompanies.module.sass"

import { CompanyInterface } from "@/interfaces/company"

interface TrustedCompaniesProps {
  companies: Array<CompanyInterface>
}

const TrustedCompanies: React.FC<TrustedCompaniesProps> = ({ companies }: TrustedCompaniesProps) => {
  return (
    <div className="container">
      <div className={styles.companies}>
        <p className={styles.description}>Trusted by companies like</p>
        <div className={styles.list}>
          {companies.map(company => <img className={styles.item} src={company.url} key={company.url} alt="" />)}
        </div>
      </div>
    </div>
  )
}

export default TrustedCompanies
