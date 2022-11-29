// todo
// 1. SELECT THE ELEMENT
// 2. LISTEN TO AN EVENT
// 3. INSIDE THE EVENT LISTENER(CALLBACK FUNCTION) WE MANIPULATE THE ELEMENT
// document.querySelector(CSS_SELECTOR)
const hintBtn = document.querySelector('.btn.btn-primary')
console.log(hintBtn)
hintBtn.addEventListener('click', (event) => {
  const hintDiv = document.querySelector('.hint')
  hintDiv.classList.add('active')
  // remove class after 1 second (1000 milliseconds)
  setTimeout(() => {
    hintDiv.classList.remove('active')
  }, 1000)
})

// PUZZLE

const canMove = (tile, emptyTile) => {
  const clickedTileColumn = tile.cellIndex
  const clickedTileRow = tile.parentElement.rowIndex

  // 1. get the cellIndex for the empty tile
  const emptyTileColumn = emptyTile.cellIndex
  // 2. compare empty tile position with clicked tile position
  const emptyTileRow = emptyTile.parentElement.rowIndex

  return (clickedTileRow === emptyTileRow && clickedTileColumn === emptyTileColumn + 1) ||
  (clickedTileRow === emptyTileRow && clickedTileColumn === emptyTileColumn - 1) ||
  (clickedTileColumn === emptyTileColumn && clickedTileRow === emptyTileRow + 1) ||
  (clickedTileColumn === emptyTileColumn && clickedTileRow === emptyTileRow - 1)
}

// 1. SELECT ALL TILES
const tiles = document.querySelectorAll('td')
console.log(tiles);
// 2. GO THROUGH ALL OF THEM / FOR EACH TILE (each one) ()
tiles.forEach((tile) => {
  // 3. LISTEN TO THE CLICK EVENT
  tile.addEventListener('click', (event) => {
    const clickedTile = event.currentTarget
    // 0. select empty tile
    const emptyTile = document.querySelector('.empty')
    // 4. CHECK IF EMPTY TILE IS A NEIGHBOR
    if (canMove(clickedTile, emptyTile)) {
      // 5. SWAP TILE AND EMPTY TILE
      // 5.1 change the class
      // 5.1 add class empty to clicked tile
      clickedTile.classList.add('empty')
      // 5.2 remove class empty from empty tile
      emptyTile.classList.remove('empty')
      // 5.3 change the content
      emptyTile.innerText = clickedTile.innerText
      clickedTile.innerText = ''
    }
  })
})
