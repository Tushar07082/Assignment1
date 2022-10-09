const selected = new Set();
const images = () => {
        var ans = "";
        for(let i=1;i<=16;i++){
                let x = Math.floor(Math.random()*100);
                ans += `<input type="checkbox" id="cb${i}" onclick=clicked(${i}) /><label for="cb${i}"><img src="https://picsum.photos/seed/${x}/200" /></label>`
        }
        return ans;
        
}
function clicked(id){
        if(selected.has(id)){
                selected.delete(id);
        }else{
                selected.add(id);
        }
        console.log(selected);
        if(selected.size==16){
                newimages();
        }
}
const newimages = () => {
        selected.clear();
        document.getElementsByClassName('container')[0].innerHTML= images();
}
newimages();