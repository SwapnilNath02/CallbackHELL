//Callback Hell

const h1=document.querySelector(".head1");
const h2=document.querySelector(".head2");
const h3=document.querySelector(".head3");
const h4=document.querySelector(".head4");
const h5=document.querySelector(".head5");
const h6=document.querySelector(".head6");
const h7=document.querySelector(".head7");
document.body.style.backgroundColor="cyan";
setTimeout(()=>{
    h1.textContent="Heading 1";
    h1.style.color="violet";
    setTimeout(()=>{
        h2.textContent="Heading 2";
        h2.style.color="purple";
        setTimeout(()=>{
            h3.textContent="Heading 3";
            h3.style.color="red";
            setTimeout(()=>{
                h4.textContent="Heading 4";
                h4.style.color="pink";
                setTimeout(()=>{
                    h5.textContent="Heading 5";
                    h5.style.color="green";
                    setTimeout(()=>{
                        h6.textContent="Heading 6";
                        h6.style.color="blue";
                        setTimeout(()=>{
                            h7.textContent="Heading 7";
                            h7.style.color="brown";
                        },1000);
                    },3000);
                },2000);
            },1000);
        },2000);
    },2000);
},1000);





