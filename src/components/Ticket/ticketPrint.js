import React, {useRef } from 'react';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import QRCode from 'react-qr-code';


const TicketPrint = () =>{
    const exportPDF = () => {
        const input = document.getElementById("Ticket");
      
      html2canvas(input,{logging:true, letterRendering:1, useCORS:true, allowTaint:true})
      .then((canvas)=>{
      const imgData = canvas.toDataURL("image/png");
            const imgWidth = 210;
            const imgHeight = canvas.height * imgWidth / canvas.width;
            const pdf = new jsPDF('p', 'mm', 'letter');
            pdf.addImage(imgData, "PNG", 0, 0, imgHeight, imgHeight);
            pdf.save("ChapChapTickets.pdf");

      });

    };

    const pdfRef = useRef();
    const printPDF = () => {
      const input = pdfRef.current;
      html2canvas(input).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'letter', true);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
        const imgX = (pdfWidth- imgWidth * ratio) / 2;
        const imgY = 30;
        pdf.addImage(imgData, 'PNG', imgX, 0, imgWidth * ratio, imgHeight * ratio);
        pdf.save('chapchapTicket.pdf');
      })   
    };

  return(
    <div className='h-full  max-w-md items-center flex flex-col overflow-y-auto z-50' >
      <div class="bg-white border rounded-lg shadow-lg px-6 py-8 max-w-md mx-auto" id="Ticket" ref={pdfRef}>
    <h1 class="font-bold text-2xl my-4 text-center text-blue-600">Gangster Blow</h1>
    <hr class="mb-2"/>
    <div class="flex justify-between mb-4">
        {/* <h1 class="text-lg font-bold">Invoice</h1> */}
        <QRCode  size={50} bgColor='white' fgColor='black' value='localHostURL'/>
        <div class="text-gray-700">
            <div>DateTime: Thu Jan 18 2024 07:51:00 </div>
            <div>Adress: Douala - Yansoki</div>
        </div>
    </div>
    <div class="flex justify-between mb-8">
        <div>
        <h2 class="text-lg font-bold mb-4">Bill To:</h2>
        <div class="text-gray-700 mb-2">John Doe</div>
        <div class="text-gray-700">Sey Jeremi</div>
        </div>
        <div>
        <h2 class="text-lg font-bold mb-4">Ticket Info:</h2>
        <div class="text-gray-700 mb-2">Name: Blow</div>
        <div class="text-gray-700 mb-2">Type: Premium One</div>
        <div class="text-gray-700 mb-2">N-#: 66259379234111</div>
        </div>
    </div>
    <div class="flex justify-between mb-4">
      <div>
      <h2 class="text-lg font-bold mb-4">Organizer Info:</h2>
        <div class="text-gray-700 mb-2">Full Name: John Doe</div>
        <div class="text-gray-700 mb-2">Number: 66259379</div>
      </div>
      <div>
      <h2 class="text-lg font-bold mb-4">Command Info:</h2>
        <div class="text-gray-700 mb-2">N-#: 66259379</div>
        <div class="text-gray-700 mb-2">Date: Thu Jan 18 2024</div>
      </div>
        
    </div>
    <table class="w-full mb-8">
        <thead>
            <tr>
                <th class="text-left font-bold text-gray-700">Description</th>
                <th class="text-center font-bold text-gray-700">Qty</th>
                <th class="text-right font-bold text-gray-700">Amount</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="text-left text-gray-700">Premium One</td>
                <td class="text-center font-bold text-gray-700">1</td>
                <td class="text-right text-gray-700">$15000XAF</td>
            </tr>

        </tbody>
        <tfoot>
            <tr>
                <td class="text-left font-bold text-gray-700">Total</td>
                <td class="text-center font-bold text-gray-700"/>
                <td class="text-right font-bold text-gray-700">$15000XAF</td>
            </tr>
        </tfoot>
    </table>
    <div class="text-gray-700 mb-2">Thank you for your business!</div>
    <div class="text-gray-700 text-sm">Made Possible by <strong>ChapChapTickets</strong>.</div>
</div>

    <button onClick={printPDF} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8">Print PDF</button>
    </div>
  )
    
};

export default TicketPrint;