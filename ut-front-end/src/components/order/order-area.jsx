'use client';
import React, { useRef } from "react";
import Image from "next/image";
import dayjs from "dayjs";
// internal
import logo from "@assets/img/logo/logo.svg";
import ErrorMsg from "@/components/common/error-msg";
import { useGetUserOrderByIdQuery } from "@/redux/features/order/orderApi";
import PrdDetailsLoader from "@/components/loader/prd-details-loader";


const OrderArea = ({ orderId }) => {
  const printRef = useRef(null);
  const { data: order, isError, isLoading } = useGetUserOrderByIdQuery(orderId);
  
  // Manual print handler
  const handlePrint = () => {
    const printContent = printRef.current;
    if (!printContent) {
      console.error("Print content not found");
      return;
    }
    
    // Clone the content to modify for printing
    const clonedContent = printContent.cloneNode(true);
    
    // Create a new window for printing
    const printWindow = window.open('', '_blank', 'width=800,height=600');
    if (!printWindow) {
      // Fallback to window.print if popup blocked
      window.print();
      return;
    }
    
    // Build the complete styled document
    const printDocument = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Invoice ${order?.order?.invoice || ''}</title>
          <style>
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            
            body { 
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
              color: #333;
              line-height: 1.6;
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }
            
            /* Container and layout */
            .invoice-wrapper {
              max-width: 800px;
              margin: 0 auto;
              padding: 40px;
              background-color: #f5f5f5;
            }
            
            /* Header section */
            .invoice-header {
              border-bottom: 2px solid #fff;
              padding-bottom: 20px;
              margin-bottom: 40px;
            }
            
            .invoice-header-content {
              display: flex;
              justify-content: space-between;
              align-items: flex-end;
            }
            
            .invoice-logo img {
              height: 60px;
              width: auto;
            }
            
            .invoice-logo p {
              margin-top: 10px;
              font-size: 12px;
              color: #666;
              max-width: 300px;
            }
            
            .invoice-title {
              text-align: right;
            }
            
            .invoice-title h1 {
              font-size: 48px;
              text-transform: uppercase;
              color: #333;
              margin: 0;
              font-weight: 300;
              letter-spacing: 2px;
            }
            
            /* Customer details */
            .customer-section {
              display: flex;
              justify-content: space-between;
              margin-bottom: 30px;
            }
            
            .customer-details h4 {
              font-size: 18px;
              margin-bottom: 10px;
              text-transform: uppercase;
              color: #333;
            }
            
            .customer-details p {
              margin: 2px 0;
              font-size: 14px;
              color: #555;
            }
            
            .invoice-details {
              text-align: right;
            }
            
            .invoice-details p {
              margin: 2px 0;
              font-size: 14px;
            }
            
            .invoice-details strong {
              color: #333;
            }
            
            /* Table */
            .order-table {
              background: white;
              padding: 30px 40px;
              margin-bottom: 30px;
              border-radius: 4px;
            }
            
            table {
              width: 100%;
              border-collapse: collapse;
            }
            
            thead {
              background-color: #f8f9fa;
            }
            
            thead th {
              padding: 12px;
              text-align: left;
              font-size: 14px;
              font-weight: 600;
              color: #333;
              border-bottom: 2px solid #dee2e6;
            }
            
            tbody td {
              padding: 12px;
              font-size: 14px;
              color: #555;
              border-bottom: 1px solid #e9ecef;
            }
            
            /* Total section */
            .total-section {
              background-color: #d4edda;
              padding: 30px 40px;
              border-radius: 4px;
              display: flex;
              justify-content: space-between;
            }
            
            .total-item {
              flex: 1;
            }
            
            .total-item h5 {
              font-size: 14px;
              margin-bottom: 5px;
              color: #333;
              font-weight: 600;
            }
            
            .total-item p {
              font-size: 16px;
              color: #155724;
              font-weight: 500;
              margin: 0;
            }
            
            .total-item:last-child p {
              color: #dc3545;
              font-size: 18px;
              font-weight: 700;
            }
            
            /* Print specific */
            @media print {
              body {
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
              }
              
              .invoice-wrapper {
                padding: 20px;
              }
              
              @page {
                size: A4;
                margin: 10mm;
              }
            }
          </style>
        </head>
        <body>
          <div class="invoice-wrapper">
            <div class="invoice-header">
              <div class="invoice-header-content">
                <div class="invoice-logo">
                  <img src="/assets/img/logo/urban-thali-logo.png" alt="Urban Thali" style="height: 60px; width: auto;" />
                  <p>GROUND FLOOR, SHOP NO. 6, A Wing, JUHU TAJ, 6, NS Mankikar Rd, nr. HSBC BANK, JVPD Scheme, Vile Parle West, Mumbai, Maharashtra 400049</p>
                </div>
                <div class="invoice-title">
                  <h1>Invoice</h1>
                </div>
              </div>
            </div>
            
            <div class="customer-section">
              <div class="customer-details">
                <h4>${order?.order?.name || 'Customer'}</h4>
                <p>${order?.order?.country || ''}</p>
                <p>${order?.order?.city || ''}</p>
                <p>${order?.order?.contact || ''}</p>
              </div>
              <div class="invoice-details">
                <p><strong>Invoice ID:</strong> #${order?.order?.invoice || ''}</p>
                <p><strong>Date:</strong> ${order?.order?.createdAt ? dayjs(order.order.createdAt).format("MMMM D, YYYY") : ''}</p>
              </div>
            </div>
            
            <div class="order-table">
              <table>
                <thead>
                  <tr>
                    <th>SL</th>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Item Price</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  ${order?.order?.cart?.map((item, i) => `
                    <tr>
                      <td>${i + 1}</td>
                      <td>${item.title}</td>
                      <td>${item.orderQuantity}</td>
                      <td>₹${item.price}</td>
                      <td>₹${(item.price * item.orderQuantity).toFixed(2)}</td>
                    </tr>
                  `).join('') || ''}
                </tbody>
              </table>
            </div>
            
            <div class="total-section">
              <div class="total-item">
                <h5>Payment Method</h5>
                <p>${order?.order?.paymentMethod || 'N/A'}</p>
              </div>
              <div class="total-item">
                <h5>Shipping Cost</h5>
                <p>₹${order?.order?.shippingCost || 0}</p>
              </div>
              <div class="total-item">
                <h5>Discount</h5>
                <p>₹${order?.order?.discount?.toFixed(2) || '0.00'}</p>
              </div>
              <div class="total-item">
                <h5>Total Amount</h5>
                <p>₹${order?.order?.totalAmount ? parseInt(order.order.totalAmount).toFixed(2) : '0.00'}</p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;
    
    printWindow.document.write(printDocument);
    printWindow.document.close();
    
    // Wait for content to load then print
    printWindow.onload = () => {
      setTimeout(() => {
        printWindow.print();
        printWindow.close();
      }, 500);
    };
  };
  
  let content = null;
  if (isLoading) {
    content = <PrdDetailsLoader loading={isLoading}/>
  }
  if (isError) {
    content = <ErrorMsg msg="There was an error" />;
  }
  if (!isLoading && !isError) {
    const { name, country, city, contact, invoice, createdAt, cart, shippingCost, discount, totalAmount, paymentMethod, status} = order.order;
    content = (
      <>
        <style jsx global>{`
          @media print {
            /* Hide everything except invoice */
            body * {
              visibility: hidden;
            }
            .tp-invoice-print-wrapper,
            .tp-invoice-print-wrapper * {
              visibility: visible;
            }
            .tp-invoice-print-wrapper {
              position: absolute;
              left: 0;
              top: 0;
              width: 100%;
              background: white;
            }
            
            /* Hide print button during print */
            .invoice__print {
              display: none !important;
            }
            
            /* Preserve invoice styling */
            .grey-bg-2 {
              background-color: #f5f5f5 !important;
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }
            
            .bg-white {
              background-color: white !important;
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }
            
            .alert-success {
              background-color: #d4edda !important;
              border-color: #c3e6cb !important;
              color: #155724 !important;
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }
            
            .bg-success {
              background-color: #28a745 !important;
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }
            
            .bg-warning {
              background-color: #FCB53B !important;
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }
            
            .bg-danger {
              background-color: #dc3545 !important;
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }
            
            .text-danger {
              color: #dc3545 !important;
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }
            
            .text-uppercase {
              text-transform: uppercase !important;
            }
            
            .table-light {
              background-color: #f8f9fa !important;
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }
            
            .border-bottom {
              border-bottom: 2px solid #dee2e6 !important;
            }
            
            .border-white {
              border-color: white !important;
            }
            
            /* Preserve padding and margins */
            .pt-40 { padding-top: 40px !important; }
            .pb-40 { padding-bottom: 40px !important; }
            .pl-40 { padding-left: 40px !important; }
            .pr-40 { padding-right: 40px !important; }
            .pt-30 { padding-top: 30px !important; }
            .pb-30 { padding-bottom: 30px !important; }
            .pt-20 { padding-top: 20px !important; }
            .pb-20 { padding-bottom: 20px !important; }
            .pt-10 { padding-top: 10px !important; }
            .pb-10 { padding-bottom: 10px !important; }
            .mb-40 { margin-bottom: 40px !important; }
            .mb-30 { margin-bottom: 30px !important; }
            .mb-20 { margin-bottom: 20px !important; }
            .mb-10 { margin-bottom: 10px !important; }
            .mb-0 { margin-bottom: 0 !important; }
            
            /* Font sizes */
            .font-70 {
              font-size: 70px !important;
            }
            
            /* Table styles */
            .table {
              width: 100% !important;
              border-collapse: collapse !important;
            }
            
            .table thead th {
              padding: 10px !important;
              text-align: left !important;
              font-weight: bold !important;
            }
            
            .table tbody td {
              padding: 10px !important;
              border-top: 1px solid #dee2e6 !important;
            }
            
            /* Ensure text alignment */
            .text-end {
              text-align: right !important;
            }
            
            .text-md-end {
              text-align: right !important;
            }
            
            /* Page settings */
            @page {
              margin: 20mm;
              size: A4;
            }
          }
        `}</style>
        <section className="invoice__area pt-120 pb-120">
          <div className="container">
            <div className="invoice__msg-wrapper">
              <div className="row">
                <div className="col-xl-12">
                  <div className="invoice_msg mb-40">
                    <p className="text-black alert alert-success">
                      Thank you <strong>{name}</strong> Your order have been received! 
                      <span className="float-end">
                        Status: <strong style={{ textTransform: 'capitalize' }}>
                          <span className={`badge ${status === 'delivered' ? 'bg-success' : status === 'processing' ? 'bg-warning' : status === 'cancel' ? 'bg-danger' : 'bg-warning'}`} style={{backgroundColor: status === 'delivered' ? '#28a745' : status === 'processing' ? '#FCB53B' : status === 'cancel' ? '#dc3545' : '#FCB53B'}}>
                            {status}
                          </span>
                        </strong>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div ref={printRef} className="invoice__wrapper grey-bg-2 pt-40 pb-40 pl-40 pr-40 tp-invoice-print-wrapper">
              <div className="invoice__header-wrapper border-2 border-bottom border-white mb-40">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="invoice__header pb-20">
                      <div className="row align-items-end">
                        <div className="col-md-4 col-sm-6">
                          <div className="invoice__left">
                            <Image src={logo} alt="logo" />
                            <p>GROUND FLOOR, SHOP NO. 6, A Wing, JUHU TAJ, 6, NS Mankikar Rd, nr. HSBC BANK, JVPD Scheme, Vile Parle West, Mumbai, Maharashtra 400049</p>
                          </div>
                        </div>
                        <div className="col-md-8 col-sm-6">
                          <div className="invoice__right mt-15 mt-sm-0 text-sm-end">
                            <h3 className="text-uppercase font-70 mb-20">Invoice</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="invoice__customer mb-30">
                <div className="row">
                  <div className="col-md-6 col-sm-8">
                    <div className="invoice__customer-details">
                      <h4 className="mb-10 text-uppercase">{name}</h4>
                      <p className="mb-0 text-uppercase">{country}</p>
                      <p className="mb-0 text-uppercase">{city}</p>
                      <p className="mb-0">{contact}</p>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-4">
                    <div className="invoice__details mt-md-0 mt-20 text-md-end">
                      <p className="mb-0">
                        <strong>Invoice ID:</strong> #{invoice}
                      </p>
                      <p className="mb-0">
                        <strong>Date:</strong> {dayjs(createdAt).format("MMMM D, YYYY")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="invoice__order-table pt-30 pb-30 pl-40 pr-40 bg-white mb-30">
                <table className="table">
                  <thead className="table-light">
                    <tr>
                      <th scope="col">SL</th>
                      <th scope="col">Product Name</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Item Price</th>
                      <th scope="col">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="table-group-divider">
                    {cart.map((item, i) => (
                      <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{item.title}</td>
                        <td>{item.orderQuantity}</td>
                        <td>₹{item.price}</td>
                        <td>₹{item.price * item.orderQuantity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="invoice__total pt-40 pb-10 alert-success pl-40 pr-40 mb-30">
                <div className="row">
                  <div className="col-lg-3 col-md-4">
                    <div className="invoice__payment-method mb-30">
                      <h5 className="mb-0">Payment Method</h5>
                      <p className="tp-font-medium text-uppercase">{paymentMethod}</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4">
                    <div className="invoice__shippint-cost mb-30">
                      <h5 className="mb-0">Shipping Cost</h5>
                      <p className="tp-font-medium">₹{shippingCost}</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4">
                    <div className="invoice__discount-cost mb-30">
                      <h5 className="mb-0">Discount</h5>
                      <p className="tp-font-medium">₹{discount.toFixed(2)}</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4">
                    <div className="invoice__total-ammount mb-30">
                      <h5 className="mb-0">Total Ammount</h5>
                      <p className="tp-font-medium text-danger">
                        <strong>₹{parseInt(totalAmount).toFixed(2)}</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="invoice__print text-end mt-3">
              <div className="row">
                <div className="col-xl-12">
                  <button
                    type="button"
                    className="tp-invoice-print tp-btn tp-btn-black"
                    onClick={handlePrint}
                  >
                    <span className="mr-5">
                      <i className="fa-regular fa-print"></i>
                    </span>{" "}
                    Print
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
  
  return (
    <>
      {content}
    </>
  );
};

export default OrderArea;