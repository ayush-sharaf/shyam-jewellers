import React from "react";
import { format } from "date-fns/format";

export default function PreviewInvoice({ values }) {
  return (
    <>
    
      <div
        id="pdf"
        className="bg-white sticky top-4 border border-slate-300 p-4 rounded-lg scale-75"
      >
        <div className="flex items-center justify-center font-bold"><u><h3>TAX INVOICE</h3></u></div>
        
        <div className="flex items-center justify-between w-full">
        <img 
        src="images/BIS-logo-250x250.png" 
        alt="BIS Stamp" 
        className="w-32 h-32 object-cover" 
      />
      <article className="flex flex-col items-end justify-end">
        <h1 className="text-2xl text-slate-900 font-bold w-">{values.name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
        <p className="text-muted-foreground w-2/3" >{values.address}</p>
        <p className="text-muted-foreground">Phone:{values.phoneNumber}</p>
        <p className="text-muted-foreground">GSTIN:{values.gstNumber}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
      </article>
      
    </div>

        
        <article className="my-8">
        <h3 className="font-bold">CUSTOMER DETAILS</h3>
          <h2 className="text-2xl text-slate-900 font-bold">
            {values.clientName}
          </h2>
          <p className="text-muted-foreground">{values.clientPhoneNumber}</p>
          <p className="text-muted-foreground w-1/2">{values.clientAddress}</p>
        </article>

        <article className="my-8 flex flex-col items-end justify-end">
          <h2 className="text-2xl text-slate-900 font-bold">Invoice Details</h2>
          <p className="text-muted-foreground ">Invoice No:{values.invoiceNumber}</p>
        
          <p className="text-muted-foreground">
            Invoice date:{" "}
            {values.invoiceDate &&
              format(new Date(values.invoiceDate), "do MMMM yyyy")}
          </p>
        </article>

        <article className="mb-8">
          <table width="100%" border='1'>
            <thead>
              <tr className="bg-slate-200">
                <td>Item Name</td>
                <td>Purity</td>
                <td>Quantity</td>
                <td>HSN Code</td>
                <td>Gross Wt.</td>
                <td>Net Wt.</td>
                <td>Rate</td>
                <td>Making Charges</td>
                <td>Amount(Rupees)</td>
              </tr>
            </thead>

            <tbody>
              {values.items.map((item) => (
                <tr key={item.id}>
                  <td className="text-muted-foreground text-sm">{item.item}</td>
                  <td className="text-muted-foreground text-sm">
                    {item.quantity}
                  </td>
                  <td className="text-muted-foreground text-sm">
                    {item.price}
                  </td>
                  <td className="text-muted-foreground text-sm">
                    {item.total}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>

        <article>
          <h2 className="text-4xl text-slate-900 font-bold my-8">
            {values.totalAmount}
          </h2>
        </article>

        {/* Invoice footer */}
        <h3 className="font-bold">Notes</h3>
        <p>
        1. It is necessary to have the bill at the time of exchanging or selling jewellery.
<br></br>
2. There is no guarantee that jewellery will not break. Gold and silver are guaranteed.
<br></br>
3. The weight of pearl, enamel and stone will be cut and taken back.
<br></br>
4. Making charges will be deducted on return of Hallmark 916 or 750 jewellery. Also, you will get back Rs 916 or 750 from the fixed gold rate.
        </p>
      </div>
    </>
  );
}