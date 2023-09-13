import './App.css';
import Resume from './Resume';
import { Button } from '@mui/material';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';


function App() {

    const width = 210;
    const height = 297;

    function handleDownload() {

        const element = document.getElementById('a4');

        console.log(element);

        element.width = width;
        element.height = height;
        html2canvas(element).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF();
            pdf.addImage(imgData, 'PNG', 0, 0, width, height);
            pdf.save("Resume - Bahadir Arslan.pdf");
        });

    }

    const resumeStyle = {
        margin: 'auto',
        width: width + 'mm',
        height: height + 'mm'
    };

    const buttonStyle = { ...resumeStyle };
    buttonStyle.marginTop = 0;

    return (
        <div>
            <div style={resumeStyle}>
                <Resume />
            </div>
            <div style={buttonStyle}>
                <Button style={{width: '100%'}} variant='contained' onClick={handleDownload}>
                    Download
                </Button>
            </div>
        </div>
    );
}

export default App;
