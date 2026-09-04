import {useState} from 'react';
import PropTypes from 'prop-types';
import Card from '../UI/Card';

const ProgressChart=({history})=>{
  const [selected,setSelected]=useState(null);
  return <Card title="Workout Activity">
    <div style={{display:'flex',alignItems:'end',gap:8,height:180}}>
      {history.slice(-10).map((w,i)=><div key={w.id} title={w.exerciseName} onClick={()=>setSelected(w.id)} style={{height:`${Math.min(100,Math.max(10,w.sets*20))}%`,width:30,backgroundColor:selected===w.id?'#111827':'#46b493',borderRadius:4,cursor:'pointer'}}><span style={{fontSize:10}}>{i+1}</span></div>)}</div>{selected&&<p>Selected workout: {history.find(w=>w.id===selected)?.exerciseName}</p>}</Card>;
};
ProgressChart.propTypes={history:PropTypes.array.isRequired};
export default ProgressChart;
