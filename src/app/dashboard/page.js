import Dashboard from '@/components/dashboard';
import Graphs from '@/components/graphs';

const dashboard = () => {
    return (
        <div className="flex gap-4 flex-row">
            <Dashboard />
            <Graphs />
        </div>
    )
}

export default dashboard