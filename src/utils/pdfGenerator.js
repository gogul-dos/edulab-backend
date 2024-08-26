const { PDFDocument, rgb } = require("pdf-lib");

exports.generatePDF = async (event) => {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage();

  page.drawText(`Event Report: ${event.title}`, {
    x: 50,
    y: page.getHeight() - 50,
    size: 20,
    color: rgb(0, 0, 0),
  });

  let yPosition = page.getHeight() - 100;

  for (const session of event.sessions) {
    page.drawText(`Session: ${session.title} by ${session.speaker}`, {
      x: 50,
      y: yPosition,
      size: 15,
      color: rgb(0, 0, 0),
    });
    yPosition -= 30;

    for (const participant of session.participants) {
      page.drawText(
        `Participant: ${participant.name}, Email: ${participant.email}`,
        {
          x: 70,
          y: yPosition,
          size: 12,
          color: rgb(0.2, 0.2, 0.2),
        }
      );
      yPosition -= 20;
    }
  }

  return pdfDoc.save();
};
