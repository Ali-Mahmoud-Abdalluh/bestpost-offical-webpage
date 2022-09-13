import { services } from "../constants"
import styles from "../style"
import loadable from '@loadable/component'

const Button = loadable(() => import('./Button'))
const ServicesCard = loadable(() => import('./ServicesCard'))

const Services = () => (
    <section className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
        <div className="w-full flex justify-between items-center sm:mb-8 mb-1 relative z-[1]">
            <h2 className={`${styles.heading2} font-[48px] text-center`}>Our Services</h2>
        </div>
        <div className={`flex sm:flex-row flex-col flex-wrap justify-around`}>
            {services.map((service) => (
                <ServicesCard key={service.id} title={service.title} description={service.description} icon={service.icon} />
            ))}
        </div>
        <div className="w-full flex justify-center items-center sm:mb-8 mb-1 relative z-[1]">
            <Button value={`All Services`} />
        </div>
    </section>
)

export default Services