$(function(){ //로드후실행


    /**
     * 
     * @언어별사이트이동
     * 
     */

        $('#btnLang').click(function(){
            url = $('#selctList').val();

            window.open(url)
        })


    /**
     * 
     * @메인슬라이드 탭메뉴
     * 
     */



    $('.sc-main .tab-nav .btn-nav').click(function(){

        mainSlide.slideToLoop($(this).data('index'))

        $(this).addClass('active').siblings().removeClass('active');
        
    })
    
    /**
     * 
     * @메인슬라이드
     * 
     */
    
    const mainSlide = new Swiper('.main-slide',{

        autoplay:{
            delay:3000,
            disableOnInteraction:false,
        },


        loop:true,
        navigation:{
            nextEl:'.next',
            prevEl:'.prev',
        },
        pagination:{
            el:'.fraction',
            type:'fraction'
        },

        on:{
            "slideChange":function(){
                if(this.realIndex >= 5){
                    $('.sc-main .tab-nav .citizen').addClass('active').siblings().removeClass('active');
                }else{
                    $('.sc-main .tab-nav .news').addClass('active').siblings().removeClass('active');
                    
                }
            }
        }

    })


    /**
     * 
     * @메인슬라이드 자동재생정지
     * 
     */

    $('.main-slide .autoplay').click(function(){
        
        if ($(this).hasClass('active')) {
            
            mainSlide.autoplay.start()
        } else {
            mainSlide.autoplay.stop()
            
        }

        $(this).toggleClass('active');

    })

    /**
     * 
     * @관련 메뉴 열기
     * 
     */

    $('.sc-related .btn-related').click(function(){


            if($(this).hasClass('on')){
                $('.sc-related .btn-related').removeClass('on').siblings('.sub-area').slideUp();
                return false;
            }
            $('.sc-related .btn-related').removeClass('on').siblings('.sub-area').slideUp();
            $(this).addClass('on').siblings('.sub-area').slideDown();
        })
        
    /**
     * 
     * @접근성을 위한 키다운 스크립트(장애인)
     * 
    */
    
    $('.sc-related .sub-area li:first-child').keydown(function(e){
        
        keyCode = e.keyCode;
        
        if (keyCode === 9 && e.shiftKey) {
            
            $('.sc-related .btn-related').removeClass('on').siblings('.sub-area').slideUp();
        }

    })
    $('.sc-related .sub-area li:last-child').keydown(function(e){
        
        keyCode = e.keyCode;
        
        if (keyCode === 9 && !e.shiftKey) {
            
            $('.sc-related .btn-related').removeClass('on').siblings('.sub-area').slideUp();
        }

    })


    /**
     * 
     * @서브슬라이드
     * 
     */

    
    const subSlide = new Swiper('.sub-slide',{

        autoplay:{
            delay:1000,
            disableOnInteraction:false,
        },

        spaceBetween:43,
        slidesPerView:3,
        loop:true,
        navigation:{
            nextEl:'.next',
            prevEl:'.prev',
        },
        pagination:{
            el:'.fraction',
            type:'fraction'
        }

    })

    /**
     * 
     * @서브슬라이드 자동재생정지
     * 
     */

    $('.sub-slide .autoplay').click(function(){
        
        if ($(this).hasClass('active')) {
            
            subSlide.autoplay.start()
        } else {
            subSlide.autoplay.stop()
            
        }

        $(this).toggleClass('active');

    })


    /**
     * 
     * @스크롤 버튼
     * 
     */

    $(window).scroll(function(){

        curr = $(this).scrollTop();

        if (curr > 0) {
            $('#topBtn').addClass('show');
        } else {
            $('#topBtn').removeClass('show');
            
        }

    })
    /**
     * 
     * @스크롤이벤트가 실행되진 않았지만, 조건문을 한번 돌리는것
     * 
     */
    $(window).trigger('scroll');

    $('#topBtn').click(function(e){
        e.preventDefault();
        window.scrollTo({top:0,behavior:"smooth"})
    })










    
}) //end