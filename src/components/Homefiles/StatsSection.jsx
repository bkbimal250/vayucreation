import StatCard from '../StatCard';
import { statsData } from '../../data/statsData';

const StatsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-orange-600 text-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            We Are Successfully Growing
          </h2>
          <p className="text-xl opacity-90">At Vayu creations</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat) => (
            <div 
              key={stat.id} 
              className="bg-white/10 backdrop-blur-sm rounded-xl"
            >
              <StatCard stat={stat} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

