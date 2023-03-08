window.arenaCallback = () => {
	// Put your JavaScript in here!
	// This will run after Are.na’s API returns your data.

//GET ALL OF MY IMAGE BLOCKS; QUERY SELECTOR ALL TAKES A CSS SELECTOR
let imageBlocks = document.querySelectorAll('li.image-block')
console.log(imageBlocks)

// GO THROUGH ALL OF MY IMAGE BLOCKS
imageBlocks.forEach((block)=> {
	// console.log(block)

// MAKE THE BLOCKS REACT ON CLICK

// TARGET THE FIGURE ELEMENT OF THE BLOCK
	block.querySelector('figure').onclick = () =>{

// ADD A CLASS CALLED ACTIVE
	block.classList.add('active')	
	}

// TARGET THE ASIDE ELEMENT OF THE BLOCK
block.querySelector('aside').onclick = () => {

// REMOVE A CLASS CALLED ACTIVE
     block.classList.remove('active')

}
})
}

