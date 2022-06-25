import { Navigate, Route, Routes } from 'react-router-dom';
import { routes } from '../routes';
const AppRouter = () => {

    return <Routes>
        {routes.map(el => (
            <Route path={el.path} element={<el.element />} key={el.path} />
        ))}
        <Route path="*" element={<Navigate to={'/'} replace />} />
    </Routes>
}

export default AppRouter;
