import { lazy,Suspense } from 'react';
import { Route,Routes } from 'react-router-dom';
import './App.css';

function App() {
  const Hm=lazy(()=>import('./components/home'));
  const Signup=lazy(()=>import('./components/signup'));
  const Add=lazy(()=>import('./components/addtask'));
  const View=lazy(()=>import('./components/view'));
  const Update=lazy(()=>import('./components/updatetask'));
  return (
    <div>
     <Suspense fallback={<div>Loading.....</div>}>
      <Routes>
        <Route path='/' element={<Hm/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/addtask' element={<Add/>}/>
        <Route path='/view' element={<View/>}/>
        <Route path='/updatetask/:id' element={<Update/>}/>
      </Routes>
     </Suspense>
    </div>
  );
}

export default App;
