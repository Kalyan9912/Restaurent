import React, { useEffect, useState } from "react";

function App() {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    fetch("http://13.127.101.24:8080/api/dishes")
      .then(res => res.json())
      .then(data => setDishes(data));
  }, []);

  return (
    <div style={{
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f8f5f0",   // ✅ Cream background
      minHeight: "100vh"
    }}>

      {/* ✅ NAVBAR */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "15px 40px",
        backgroundColor: "#fbf7f2",  // ✅ Soft warm navbar
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        position: "sticky",
        top: 0,
        zIndex: 1000
      }}>
        <div style={{ display: "flex", gap: "25px", fontWeight: "bold" }}>
          <span>Home</span>
          <span style={{ color: "#d35400" }}>Menu</span>
          <span>Orders</span>
          <span>Contact</span>
        </div>

        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <span style={{ cursor: "pointer" }}>🔍</span>
          <span style={{ cursor: "pointer" }}>Log In</span>
          <span style={{
            backgroundColor: "#d35400",
            color: "white",
            padding: "6px 14px",
            borderRadius: "20px",
            fontWeight: "bold"
          }}>
            Cart (2)
          </span>
        </div>
      </div>

      {/* ✅ HERO BANNER */}
      <div style={{
        backgroundImage: "url('/images/banner.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "220px",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingLeft: "50px"
      }}>
        <h1 style={{ margin: 0 }}>Fine Dine Restaurant</h1>
        <p style={{ margin: "8px 0" }}>⭐⭐⭐⭐⭐ 4.9 (1.2k+ Reviews)</p>
        <p style={{ margin: 0 }}>New York, NY</p>
      </div>

      {/* ✅ SEARCH BAR */}
      <div style={{ padding: "20px 50px" }}>
        <input
          type="text"
          placeholder="🔍 Search Menu..."
          style={{
            width: "100%",
            padding: "15px",
            borderRadius: "30px",
            border: "1px solid #e0dcd5",
            fontSize: "16px",
            backgroundColor: "#fbf7f2"
          }}
        />
      </div>

      {/* ✅ CATEGORY TABS */}
      <div style={{
        display: "flex",
        gap: "15px",
        padding: "0 50px 20px"
      }}>
        {["Popular", "Starters", "Main Course", "Desserts"].map(cat => (
          <button key={cat} style={{
            padding: "8px 18px",
            borderRadius: "20px",
            border: cat === "Popular"
              ? "none"
              : "1px solid #e0dcd5",
            backgroundColor: cat === "Popular"
              ? "#d35400"
              : "#fbf7f2",
            color: cat === "Popular"
              ? "white"
              : "#2c3e50",
            cursor: "pointer",
            fontWeight: "bold"
          }}>
            {cat}
          </button>
        ))}
      </div>

      {/* ✅ DISH SECTION */}
      <div style={{ padding: "0 50px 40px" }}>
        <h2 style={{ color: "#2c3e50" }}>Popular Dishes</h2>

        <div style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap"
        }}>
          {dishes.map(dish => (
            <div key={dish.id} style={{
              width: "240px",
              backgroundColor: "white",
              borderRadius: "12px",
              padding: "15px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.08)"
            }}>
              <img
                src={`/images/${dish.name.toLowerCase().replaceAll(" ", "")}.jpg`}
                alt={dish.name}
                style={{
                  width: "100%",
                  height: "140px",
                  objectFit: "cover",
                  borderRadius: "10px"
                }}
              />

              <h3 style={{ color: "#34495e" }}>
                {dish.name}
              </h3>

              <p style={{
                color: "#f39c12",
                margin: "5px 0"
              }}>
                ⭐⭐⭐⭐⭐ (1.2k+)
              </p>

              <p style={{
                color: "#27ae60",
                fontWeight: "bold",
                fontSize: "18px"
              }}>
                💲{dish.price}
              </p>

              <button style={{
                backgroundColor: "#d35400",
                color: "white",
                border: "none",
                padding: "10px",
                borderRadius: "8px",
                width: "100%",
                cursor: "pointer",
                marginTop: "10px",
                fontWeight: "bold"
              }}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default App;

