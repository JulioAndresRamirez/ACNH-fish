import { useRecoilState } from 'recoil'
import { filters } from '../../services/Recoil' 
import { FILTERS_FUNC } from '../../utils/index'
import Button from '../Button/Button'

const ButtonGroup = () => {
  const [filter, setFilter] = useRecoilState(filters)
  return (
    <div>
      {
        Object.keys(FILTERS_FUNC).map(func => {
          return <Button label={FILTERS_FUNC[func]} selected={filter === FILTERS_FUNC[func]} handleState={() => setFilter(FILTERS_FUNC[func])} />;
        })
      }
      
    </div>
  );
};

export default ButtonGroup;
