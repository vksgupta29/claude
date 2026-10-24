(function(){
var g=document.getElementById('gate'),ok=false;
if(g){
 try{ok=sessionStorage.getItem('ial-ok')==='1'}catch(e){}
 if(!ok){g.hidden=false;document.getElementById('yes').focus()}
 document.getElementById('yes').onclick=function(){g.hidden=true;try{if(document.getElementById('rem').checked)sessionStorage.setItem('ial-ok','1')}catch(e){}};
 document.getElementById('nob').onclick=function(){document.getElementById('no').textContent='Closing the website…';g.hidden=true;document.body.style.visibility='hidden';try{window.close()}catch(e){}setTimeout(function(){location.replace('about:blank')},150)};
}
var t=document.querySelector('.nav-toggle'),n=document.getElementById('primary-nav');
if(t&&n)t.onclick=function(){var o=n.classList.toggle('open');t.setAttribute('aria-expanded',o);t.setAttribute('aria-label',o?'Close navigation':'Open navigation')};
var y=document.querySelectorAll('[data-year]');for(var i=0;i<y.length;i++)y[i].textContent=new Date().getFullYear();
var f=document.getElementById('f');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var d=new FormData(f);
 var b='Name: '+d.get('n')+'\nCompany: '+d.get('co')+'\nContact: '+d.get('c')+'\nArea: '+d.get('t')+'\n\n'+d.get('m');
 document.getElementById('ok').textContent='Opening your email app.';
 location.href='mailto:info@indamicus.com?subject='+encodeURIComponent('Enquiry: '+d.get('t'))+'&body='+encodeURIComponent(b)});
})();
