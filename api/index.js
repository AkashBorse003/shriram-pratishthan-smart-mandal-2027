const {createClient}=require('@supabase/supabase-js');
const db=createClient(process.env.SUPABASE_URL,process.env.SUPABASE_SERVICE_ROLE_KEY);
const json=(res,status,data)=>res.status(status).json(data); const admin=req=>req.headers['x-admin-pin']===process.env.ADMIN_PIN;
module.exports=async(req,res)=>{try{let p=req.url.split('?')[0].replace(/^\/api\/?/,'');
if(req.method==='GET'&&p==='health')return json(res,200,{ok:true,service:'SRP Smart Mandal 2027'});
if(req.method==='GET'&&p==='settings'){const {data,error}=await db.from('settings').select('*');if(error)throw error;return json(res,200,Object.fromEntries((data||[]).map(x=>[x.k,x.v])))}
if(req.method==='GET'&&p.startsWith('members/')){const id=p.split('/')[1];const {data,error}=await db.from('members').select('*').eq('id',id).maybeSingle();if(error)throw error;if(!data)return json(res,404,{error:'सदस्य सापडला नाही'});return json(res,200,data)}
if(req.method==='GET'&&p==='members'){const {data,error}=await db.from('members').select('*').order('created_at',{ascending:false});if(error)throw error;return json(res,200,data)}
if(req.method==='POST'&&p==='members'){const b=req.body||{};if(!b.name)return json(res,400,{error:'नाव आवश्यक आहे'});const id='SRP-M-'+Date.now().toString(36).toUpperCase();const {error}=await db.from('members').insert({id,name:b.name,mobile:b.mobile||'',email:b.email||'',role:b.role||'सदस्य',area:b.area||'',address:b.address||'',photo:b.photo||''});if(error)throw error;return json(res,201,{id})}
if(req.method==='GET'&&p==='receipts'){const {data,error}=await db.from('receipts').select('*').order('created_at',{ascending:false});if(error)throw error;return json(res,200,data)}
if(req.method==='POST'&&p==='receipts'){const b=req.body||{};if(!b.name||!b.amount)return json(res,400,{error:'नाव आणि रक्कम आवश्यक आहे'});const id='SRP-R-'+Date.now().toString(36).toUpperCase();const {error}=await db.from('receipts').insert({id,name:b.name,mobile:b.mobile||'',address:b.address||'',amount:Number(b.amount),payment:b.payment||'रोख',note:b.note||''});if(error)throw error;return json(res,201,{id})}
if(req.method==='GET'&&p==='aarti/today'){const d=new Date().toISOString().slice(0,10);const {data,error}=await db.from('aarti').select('*').eq('date',d).order('time').limit(1).maybeSingle();if(error)throw error;return json(res,200,data||null)}
if(req.method==='GET'&&p==='notifications'){const {data,error}=await db.from('notifications').select('*').order('created_at',{ascending:false}).limit(30);if(error)throw error;return json(res,200,data)}
if(req.method==='POST'&&p==='admin/notifications'){if(!admin(req))return json(res,401,{error:'Unauthorized'});const b=req.body||{};const {error}=await db.from('notifications').insert({title:b.title,message:b.message});if(error)throw error;return json(res,201,{ok:true})}
return json(res,404,{error:'Not found'});
}catch(e){return json(res,500,{error:e.message})}};