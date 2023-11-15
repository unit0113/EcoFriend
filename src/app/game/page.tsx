function Game() {
  return (
    <div
      style={{
        display: 'flex', // This line changes the display to flexbox
        justifyContent: 'center', // This centers the iframe horizontally
        alignItems: 'center', // This centers the iframe vertically
        height: '100vh', // This makes the container take up the full viewport height
        width: '100%', // This makes the container take up the full viewport width
      }}
    >
      <iframe
        src="https://itch.io/embed-upload/9070989?color=333333"
        allowFullScreen={true}
        width="800"
        height="620"
        style={{
          border: 'none', // Optional: This could be added to remove the border around the iframe
        }}
      >
      </iframe>
    </div>
  )
}

export default Game
