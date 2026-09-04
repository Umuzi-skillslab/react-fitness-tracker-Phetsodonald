import {useNavigate} from 'react-router-dom';
import Header from '../components/common/Header';
import Button from '../components/UI/Button';

const NotFound=()=>{
    const navigate=useNavigate();
    return <><Header title="404 - Page Not Found" subtitle="The page you are looking for does not exist."/>
    <Button onClick={()=>navigate('/')}>Go Home</Button>
    </>
    
};

export default NotFound;