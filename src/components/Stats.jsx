import { stats } from "../constants"
import styles from "../style"

const Stats = () => (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6 bg-blue-gradient-btn`}>
        {stats.map((stat) => (
            <div className={`${styles.flexCenter} flex-1 flex  justify-start items-center flex-row min-w-[40%] sm:flex-col sm:min-w-[30%] md:min-w-[20%]  m-3`} key={stat.id}>
                <p className="font-cairo font-semibold xs:text-[45px] text-[36px] xs:leading-[53px] leading-[43px] text-white">+{stat.value}</p>
                <p className="font-cairo font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-white uppercase ml-3">{stat.title}</p>
            </div>
        ))}
    </section>
)


export default Stats