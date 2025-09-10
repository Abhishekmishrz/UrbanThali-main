'use client'
import dayjs from "dayjs";
import Link from "next/link";
import React from "react";

const MyOrders = ({ orderData }) => {
  const order_items = orderData?.orders;
  return (
    <div className="profile__ticket table-responsive">
      {!order_items ||
        (order_items?.length === 0 && (
          <div
            style={{ 
              minHeight: "400px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "60px 20px"
            }}
          >
            <div className="text-center" style={{ maxWidth: "400px" }}>
              {/* Handwritten style text */}
              <div style={{
                fontFamily: "'Kalam', 'Comic Sans MS', cursive",
                fontSize: "18px",
                color: "#FCB53B",
                fontWeight: "600",
                marginBottom: "20px",
                lineHeight: "1.4"
              }}>
                Your orders with Urban Thali will be listed here.
              </div>
              
              {/* Character illustration */}
              <div style={{
                margin: "30px 0",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}>
                <div style={{
                  width: "120px",
                  height: "120px",
                  background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.1)"
                }}>
                  {/* Cat-like character with sunglasses */}
                  <div style={{
                    width: "80px",
                    height: "80px",
                    background: "white",
                    borderRadius: "50%",
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}>
                    {/* Eyes */}
                    <div style={{
                      position: "absolute",
                      top: "25px",
                      left: "20px",
                      width: "12px",
                      height: "12px",
                      background: "#333",
                      borderRadius: "50%"
                    }}></div>
                    <div style={{
                      position: "absolute",
                      top: "25px",
                      right: "20px",
                      width: "12px",
                      height: "12px",
                      background: "#333",
                      borderRadius: "50%"
                    }}></div>
                    
                    {/* Sunglasses */}
                    <div style={{
                      position: "absolute",
                      top: "20px",
                      left: "15px",
                      width: "50px",
                      height: "20px",
                      background: "#333",
                      borderRadius: "10px",
                      border: "2px solid #FCB53B"
                    }}></div>
                    
                    {/* Nose */}
                    <div style={{
                      position: "absolute",
                      top: "45px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "8px",
                      height: "6px",
                      background: "#FCB53B",
                      borderRadius: "50%"
                    }}></div>
                    
                    {/* Mouth */}
                    <div style={{
                      position: "absolute",
                      top: "55px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "20px",
                      height: "10px",
                      border: "2px solid #333",
                      borderTop: "none",
                      borderRadius: "0 0 20px 20px"
                    }}></div>
                  </div>
                  
                  {/* Paw */}
                  <div style={{
                    position: "absolute",
                    bottom: "-10px",
                    right: "10px",
                    width: "20px",
                    height: "15px",
                    background: "#FCB53B",
                    borderRadius: "10px",
                    transform: "rotate(-15deg)"
                  }}></div>
                </div>
              </div>
              
              {/* Call to action text */}
              <div style={{
                fontFamily: "'Kalam', 'Comic Sans MS', cursive",
                fontSize: "16px",
                color: "#FCB53B",
                fontWeight: "600",
                marginBottom: "20px",
                lineHeight: "1.4"
              }}>
                Go ahead and find some awesome restaurants near you...
              </div>
              
              {/* Status messages */}
              <div style={{
                fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                fontSize: "24px",
                fontWeight: "700",
                color: "#1f2937",
                marginBottom: "8px"
              }}>
                No Orders
              </div>
              
              <div style={{
                fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                fontSize: "16px",
                color: "#6b7280",
                fontWeight: "400"
              }}>
                You haven&apos;t placed any order yet.
              </div>
            </div>
          </div>
        ))}
      {order_items && order_items?.length > 0 && (
        <div style={{
          background: "white",
          borderRadius: "12px",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.08)",
          overflow: "hidden"
        }}>
          <div style={{
            padding: "24px",
            borderBottom: "1px solid #f3f4f6",
            background: "#fafbfc"
          }}>
            <h3 style={{
              margin: 0,
              fontSize: "20px",
              fontWeight: "600",
              color: "#1f2937"
            }}>
              Your Orders
            </h3>
            <p style={{
              margin: "4px 0 0 0",
              fontSize: "14px",
              color: "#6b7280"
            }}>
              Track and manage your food orders
            </p>
          </div>
          
          <div style={{ overflowX: "auto" }}>
            <table className="table" style={{ margin: 0 }}>
              <thead style={{ background: "#f9fafb" }}>
                <tr>
                  <th scope="col" style={{
                    padding: "16px 24px",
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#374151",
                    border: "none"
                  }}>Order ID</th>
                  <th scope="col" style={{
                    padding: "16px 24px",
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#374151",
                    border: "none"
                  }}>Order Time</th>
                  <th scope="col" style={{
                    padding: "16px 24px",
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#374151",
                    border: "none"
                  }}>Status</th>
                  <th scope="col" style={{
                    padding: "16px 24px",
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#374151",
                    border: "none"
                  }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {order_items.map((item, i) => (
                  <tr key={i} style={{
                    borderBottom: i < order_items.length - 1 ? "1px solid #f3f4f6" : "none"
                  }}>
                    <th scope="row" style={{
                      padding: "16px 24px",
                      fontSize: "14px",
                      fontWeight: "500",
                      color: "#1f2937",
                      border: "none"
                    }}>#{item._id.substring(20, 25)}</th>
                    <td style={{
                      padding: "16px 24px",
                      fontSize: "14px",
                      color: "#6b7280",
                      border: "none"
                    }}>
                      {dayjs(item.createdAt).format("MMMM D, YYYY")}
                    </td>
                    <td style={{ padding: "16px 24px", border: "none" }}>
                      <span style={{
                        display: "inline-block",
                        padding: "6px 12px",
                        borderRadius: "20px",
                        fontSize: "12px",
                        fontWeight: "600",
                        textTransform: "capitalize",
                        background: item.status === "pending" ? "#fef3c7" : 
                                   item.status === "processing" ? "#dbeafe" :
                                   item.status === "delivered" ? "#d1fae5" :
                                   item.status === "cancel" ? "#fee2e2" : "#f3f4f6",
                        color: item.status === "pending" ? "#d97706" :
                               item.status === "processing" ? "#2563eb" :
                               item.status === "delivered" ? "#059669" :
                               item.status === "cancel" ? "#dc2626" : "#6b7280"
                      }}>
                        {item.status}
                      </span>
                    </td>
                    <td style={{ padding: "16px 24px", border: "none" }}>
                      <Link 
                        href={`/order/${item._id}`} 
                        style={{
                          display: "inline-block",
                          padding: "8px 16px",
                          background: "#FCB53B",
                          color: "white",
                          textDecoration: "none",
                          borderRadius: "6px",
                          fontSize: "14px",
                          fontWeight: "500",
                          transition: "all 0.2s ease"
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.background = "#e6a235";
                          e.target.style.transform = "translateY(-1px)";
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.background = "#FCB53B";
                          e.target.style.transform = "translateY(0)";
                        }}
                      >
                        View Invoice
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyOrders;
