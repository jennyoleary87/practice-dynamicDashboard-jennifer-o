
import Greeting from './greeting'
import PremiumMessage from './premium'
import DateToday from './date'


export default function DynamicDashboard() {
    return (
        <div>
            <DateToday />
            <Greeting />
            <PremiumMessage />
        </div>
    );
}