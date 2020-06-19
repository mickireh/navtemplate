(function(window,document,$){
    $(function(){
        // Hamburger Menu*******************************************************************************************
        $('#menu').on('click',function(){
            $("#menu")[0].classList.toggle("change");
            $("#navi")[0].classList.toggle("change");
        });

        $('nav ul').on('keydown','li',function(e){

            if(e.keyCode == 13){
                // console.log($(this));
                // console.log($(this.children));
                // console.log($(this.children[0]));
                // console.log($(this.children)[0]);
                // console.log(e);
                $(this).children()[0].click();
                // nein, bugged
            };
           
        });

        // focus 2.ebene 
        $('nav>ul>li>ul').on('focus','li',function(e){
            $(this).parent().css('left','auto');
            $(this).parent().css('opacity','1');
            // $(this).parent().css('margin-top','0.5em');
            $(this).parent().css('margin-left','0');

        });
        // on blur ausgangszustand
        // sache hier ist, dass .css() inline style schreibt, also onblur dieses wieder entfernen '' um auf stylesheet zurückzusetzen
        $('nav>ul>li>ul').on('blur','li',function(e){
            $(this).parent().css('left','');
            $(this).parent().css('opacity','');
            $(this).parent().css('margin-top','');
            $(this).parent().css('margin-left','');
        });

        $('nav>ul>li>ul>li>ul').on('focus','li',function(e){
            $(this).parent().css('left','auto');
            $(this).parent().css('opacity','1');
            // $(this).parent().css('margin-top','0.5em');
            $(this).parent().css('margin-left','0'); 
            // $(this).css('left','auto');
            // $(this).css('margin-left','0');
            // $(this).css('margin-top','0');
        });

        // on blur 
        // 3.ebene nav
        $('nav ul li ul li ul').on('blur','li',function(e){
            // console.log(this);
            // console.log($(this).parent());
            $(this).parent().css('left','');
            $(this).parent().css('opacity','');
            $(this).parent().css('margin-left',''); 
            // $(this).parent().css('margin-top','0.5em');
            // $(this).css('left','');
            // $(this).css('margin-top','0'); 
        });

    }); //_______end load
}(window,document,jQuery));