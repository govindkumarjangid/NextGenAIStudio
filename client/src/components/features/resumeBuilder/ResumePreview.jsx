import MinimalTemplate from './templates/MinimalTemplate';
import ModernTemplate from './templates/ModernTemplate.jsx';
import MinimalImageTemplate from './templates/MinimalImageTemplate';
import ClassicTemplate from './templates/ClassicTemplate';

const ResumePreview = ({ data, template, accentColor, classes = '' }) => {

    const renderTemplate = () => {
        switch (template) {
            case "modern":
                return <ModernTemplate data={data} accentColor={accentColor} />;
            case "minimal":
                return <MinimalTemplate data={data} accentColor={accentColor} />;
            case "minimal-image":
                return <MinimalImageTemplate data={data} accentColor={accentColor} />;
            default:
                return <ClassicTemplate data={data} accentColor={accentColor} />;
        }
    }

    return (
        <div className="w-full overflow-x-auto">
            <div id="resume-preview" className={`relative w-full min-w-[8.5in] min-h-[11in] backdrop-blur-xl ${classes} print:border-none print:shadow-none`}>
                {renderTemplate()}
            </div>

            <style jsx>
                {`@page {
                    size: letter;
                    margin: 0mm;
                  }
                  @media print {
                    html, body {
                      width: 8.5in;
                      height: 11in;
                      margin: 0 !important;
                      padding: 0 !important;
                      background: white;
                    }
                    body * {
                      visibility: hidden;
                    }
                    #resume-preview, #resume-preview * {
                      visibility: visible;
                    }
                    #resume-preview {
                      position: absolute;
                      left: 0;
                      top: 0;
                      width: 8.5in !important;
                      height: 11in !important;
                      margin: 0 !important;
                      padding: 0 !important;
                      box-shadow: none !important;
                      border: none !important;
                      -webkit-print-color-adjust: exact !important;
                      print-color-adjust: exact !important;
                    }
                  }
                `}
            </style>

        </div>
    )
}

export default ResumePreview;