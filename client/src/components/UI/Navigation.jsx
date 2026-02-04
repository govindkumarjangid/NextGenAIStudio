import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
     const navigate = useNavigate();
  return (
    <div className="max-w-7xl mx-auto px-2 md:px-6 lg:px-10 mt-5 z-49">
        <button
          onClick={() => navigate(-1)}
          className="text-gray-300 hover:text-white cursor-pointer flex items-center gap-1 max-w-6xl group active:scale-95 transition-transform"
        >
          <ChevronLeft className="size-5 group-hover:-translate-x-1 transition-transform duration-200" />
          Back to features
        </button>
      </div>
  )
}

export default Navigation;