let buttons  = $('button'); 
let isopned = true;

$('#button-toggle').click(()=>{
    if(isopned)
    {
        $('#down-menu').css('animation','scalereverse .3s 1');
        setTimeout(()=>{
            $('#down-menu').css('display','none');
        },100)
        isopned =false;

        $("#btnicon .fa-chevron-down").toggleClass("rtoate180");

        let toggle = $('.toggle');

        for(var i = 0; toggle.length>i; i++) {
            toggle[i].classList.remove('is-on');
        }

    }
    else{
        $('#down-menu').css({'display':'block','animation': 'scale .3s 1'});
        for(var i=0; i<buttons.length; i+=1)
        {
            buttons[i].style.animation='op .8s 1';
        }
        isopned =true;

        $("#btnicon .fa-chevron-down").toggleClass("rtoate180");
    }
});


const toggle = $('.toggle');

for(var i = 0; toggle.length>i; i++) {
	toggle[i].addEventListener('click', function() {
		this.classList.toggle('is-on');
	})
}

