(function(){
  document.documentElement.classList.add('js');

  // reaplica imagens repetidas a partir da primeira ocorrência (arquivo único, sem duplicar bytes)
  document.querySelectorAll('img[data-k]:not([src])').forEach(function(img){
    var o = document.querySelector('img[data-k="'+img.dataset.k+'"][src]');
    if(o) img.src = o.src;
  });

  // cabeçalho
  var header = document.querySelector('header');
  function onScroll(){ header.classList.toggle('scrolled', window.scrollY > 8); }
  onScroll(); window.addEventListener('scroll', onScroll, {passive:true});

  // menu mobile
  var burger = document.querySelector('.burger'), menu = document.getElementById('menu');
  function setMenu(open){ burger.setAttribute('aria-expanded', open); burger.setAttribute('aria-label', open?'Fechar menu':'Abrir menu'); menu.classList.toggle('open', open); }
  burger.addEventListener('click', function(){ setMenu(burger.getAttribute('aria-expanded')!=='true'); });
  menu.querySelectorAll('a').forEach(function(a){ a.addEventListener('click', function(){ setMenu(false); }); });
  window.addEventListener('keydown', function(e){ if(e.key==='Escape') setMenu(false); });

  // FAQ
  document.querySelectorAll('.q button').forEach(function(b){
    b.addEventListener('click', function(){
      var q = b.parentElement, open = !q.classList.contains('open');
      q.classList.toggle('open', open); b.setAttribute('aria-expanded', open);
    });
  });

  // fade-up ao rolar
  var items = document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    var io = new IntersectionObserver(function(es){
      es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
    }, {threshold:.08, rootMargin:'0px 0px -40px 0px'});
    items.forEach(function(el){ io.observe(el); });
  } else items.forEach(function(el){ el.classList.add('in'); });


  // formulário -> WhatsApp
  document.getElementById('form').addEventListener('submit', function(e){
    e.preventDefault();
    var f = e.target, nome = f.nome.value.trim();
    if(!nome){ f.nome.focus(); f.nome.style.borderColor = '#F26B1D'; return; }
    f.nome.style.borderColor = '';
    var t = 'Olá, Gesso Feito! Gostaria de pedir um orçamento.\n' +
            'Nome: ' + nome + '\n' +
            'Telefone: ' + f.tel.value.trim() + '\n' +
            'Tipo de serviço: ' + f.tipo.value + '\n' +
            'Mensagem: ' + f.msg.value.trim();
    const url = new URL(document.getElementById('whatsapp-contact').href);
    url.searchParams.set('text', t);
    window.open(url.href, '_blank', 'noopener,noreferrer');
  });
})();
