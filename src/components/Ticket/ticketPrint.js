import React, { useEffect, useRef } from 'react';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


const TicketPrint = () =>{
    const generateTicket = () =>{
        
        var doc = new jsPDF('p', 'pt', 'letter');

        // doc.save("myTicket.pdf");
        const htmlString = document.documentElement.outerHTML;

      // Ajoute le contenu au PDF
        doc.html(htmlString, {
            callback: (pdf) => {
            // Sauvegarde le PDF en tant que fichier
            pdf.save('tickets.pdf');
            },
        });
    };
    const previewRef = useRef();

    

    const previewTicket = () => {
        // Créez une nouvelle instance de jsPDF
        const pdf = new jsPDF('p', 'pt', 'a4');
      /*
        // Récupérez le contenu HTML que vous souhaitez ajouter au PDF
        // const content = previewRef.current;
        const content = document.documentElement.outerHTML;
        const marginX = 10;
        const marginY = 5;
        var width = 945.35;
        var height = 823.26;
        
        pdf.setDocumentProperties({title: 'Ticket'})



        // Ajoutez le contenu au PDF
        pdf.html(content, {
        // margin: { top: marginY, right: marginX, bottom: marginY, left: marginX },
        callback: () => {
            // Affichez la prévisualisation dans une nouvelle fenêtre
            pdf.output('dataurlnewwindow');
        }
        });*/
    };

    const exportPDF = () => {
        const input = document.getElementById("Ticket");
        html2canvas(input, {logging:true, letterRendering:1, useCORS:true, allowTaint:true,})
          .then((canvas) => {
            const imgData = canvas.toDataURL("image/png");
            const imgWidth = 210;
            const imgHeight = canvas.height * imgWidth / canvas.width;
            const pdf = new jsPDF('p', 'mm', 'letter');
            pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
            pdf.save("chapcahpTickets.pdf");
            pdf.output('dataurlnewwindow');

          })
          ;

    };

    // Appelle la fonction de génération du PDF

        useEffect(() => {
            // generateTicket();
            // previewTicket();
            // exportPDF(); 

        }, []);

  return(
      <div className='fixed h-full w-full  bg-white flex flex-col px-10 py-5 overflow-y-auto'>

            <div  id='Ticket' className='p-16'>
            {/* Title */}
            <div className="flex flex-col mb-20">
                <div className="w-1/2 min-h-[100px]  bg-white border border-slate-950 border-x-2 border-y-2 px-5 py-5 font-semibold text-xl text-left truncate">Gangstrer Blow</div>
                  {/* {Ellipse} */}
                  <span className="h-[70px] w-[70px] bg-blue-500 rounded-ee-full"></span>
            </div>
            {/* Divider */}
            <div class="border-b border-slate-700"></div>
            {/* {Event Info} */}
            <div className="w-full bg-white h-[250px] items-start px-5 py-4 flex justify-around mb-16">
              <div className="h-[230px] w-[250px] bg-black"></div>
            
              <div className="h-full w-[300px] border border-slate-950 border-x-2 border-y-2 text-center px-5 py-5 flex flex-col items-center justify-center text-ellipsis">
                <h2>Date et Horaire</h2>
                <p className='font font-semibold text-md'>Thu Jan 18 2024 to Fri Jan 26 2024 07:51:00 - 07:51:00</p>
              </div>
              <div className="h-full max-w-[50px] border-r-2 border-black"></div>
            
              <div className="h-full w-[300px] border border-slate-950 border-x-2 border-y-2 text-center px-5 py-5 flex flex-col items-center justify-center text-ellipsis">
                <h2>Adresse Evenement</h2>
                <p className='font font-semibold text-md'>Cameroun, Douala: Dernier Arret Yatchika</p>
              </div>
              
            </div>

            {/* Divider */}
            <div class="border-b border-slate-700"></div>
            {/* {Event Info} */}
            <div className="w-full bg-white h-[250px] items-start px-5 py-4 flex justify-around mb-16">
            
              <div className="h-full w-1/2 border border-slate-950 border-x-2 border-y-2 text-center px-5 py-5 flex flex-col items-center justify-center text-ellipsis">
                <h2>Nom et Prenom ettendee</h2>
                <p className='font font-semibold text-md'>lorem ipsum dolor  doummy texte d</p>
              </div>
              <div className="h-full max-w-[50px] border-r-2 border-black"></div>
            
              <div className="h-full w-[300px] border border-slate-950 border-x-2 border-y-2 text-center px-5 py-5 flex flex-col items-center justify-center text-ellipsis">
                <h2>Numero unique Billet</h2>
                <p className='font font-semibold text-md'>1189288 9289827 37  092 838 7</p>
              </div>
              
            </div>
            {/* <!-- {Event Info} --> */}
            <div className="w-full bg-white h-[250px] items-start px-5 py-4 flex justify-around mb-16">
            
                <div className="h-full w-3/12 border border-slate-950 border-x-2 border-y-2 text-center px-5 py-5 flex flex-col items-center justify-center text-ellipsis">
                  <h2>Nom et Prenom</h2>
                  <p className='font font-semibold text-md'>lorem ipsum dolor  doummy texte d</p>
                </div>
                <div className="h-full w-3/12 border border-slate-950 border-x-2 border-y-2 text-center px-5 py-5 flex flex-col items-center justify-center text-ellipsis">
                  <h2>Type de Billet</h2>
                  <p className='font font-semibold text-md'>lorem ipsum dolor  doummy texte d</p>
                </div>
              
                <div className="h-full w-1/4 border border-slate-950 border-x-2 border-y-2 text-center px-5 py-5 flex flex-col items-center justify-center text-ellipsis">
                  <h2>Code Bar</h2>
                  <p className='font font-semibold text-md'>1189288 9289827 37  092 838 7</p>
                </div>
            </div>

            <div>
            <div className="w-3/4 bg-white h-[250px] items-start px-5 py-3 flex justify-around mb-16 float-left">
            
            <div className="h-full w-3/4 border border-slate-950 border-x-2 border-y-2 text-center px-5 py-5 flex flex-col items-center justify-center text-ellipsis mr-4">
              <h2>Nom et Prenom</h2>
              <p className='font font-semibold text-md'>lorem ipsum dolor  doummy texte d</p>
            </div>
            <div className="h-full w-1/4 border border-slate-950 border-x-2 border-y-2 text-center px-5 py-5 flex flex-col items-center justify-center text-ellipsis">
              <h2>Type de Billet</h2>
              <p className='font font-semibold text-md'>lorem ipsum dolor  doummy texte d</p>
            </div>
        </div>
        <div className="w-1/4 bg-white h-2/4 items-start px-5 py-3 justify-around mb-16 float-right">
            <div className="min-h-3/12 w-full border border-slate-950 border-x-2 border-y-2 text-start px-3 py-3 flex flex-col items-left justify-center text-ellipsis mb-2">
              <h2 className='font font-semibold'>Organisateur</h2>
              <p className=' text-md'><strong>Nom & Prenom:</strong> ipsum dolor  doummy texte d</p>
              <p className=' text-md'><strong>Numero:</strong> 6 xxx yyy zzz</p>
            </div>
            <div className="min-h-3/6 w-full border border-slate-950 border-x-2 border-y-1 text-start px-5 py-5 flex flex-col items-left justify-center text-ellipsis">
              {/* <h2 className='font font-semibold'>Organisateur</h2> */}
              <p className=' text-md'><strong>Numero de Commande:</strong> 74774837 7387492 82738</p>
              <p className=' text-md'><strong>Prix Total:</strong> xxyyyz XAF</p>
              <p className=' text-md'><strong>Nom Acheteur:</strong> ipsum dolor  doummy</p>
              <p className=' text-md'><strong>Date d'achat:</strong> 09 - 02 - 2024</p>
            </div>
            <div className="min-h-3/6 w-full border border-slate-950 border-x-2 border-y-1 text-start px-5 py-5 flex flex-col items-left justify-center text-ellipsis mb-4">
              <p className=' text-md'><strong>Description:</strong></p>
            </div>
            <div className="h-3/12 w-full bg-black border border-slate-950 border-x-2 border-y-2 text-start px-5 py-5 flex flex-col items-left justify-center text-ellipsis mb-2">
              {/* <p className='font font-semibold text-md'>lorem ipsum dolor  doummy texte d</p> */}
            </div>
            <div className="h-3/12 w-full border border-slate-950 border-x-2 border-y-2 text-start px-5 py-5 flex flex-col items-left justify-center text-ellipsis mb-2">
              <p className='font font-semibold text-md font-italic'><i>ChapChapTickets</i></p>
            </div>
        </div>


      </div>

    
    
  </div>
      </div>
        )
    
};

export default TicketPrint;