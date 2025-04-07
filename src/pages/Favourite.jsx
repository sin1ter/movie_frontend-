import "../css/Favourites.css" 

function Favourite() {
    return (
        <div className="favorites-empty">
          <h2>No Favorite Movies Yet</h2>
          <p>Start adding movies to your favorites and they will appear here!</p>
        </div>
      );
}

export default Favourite;