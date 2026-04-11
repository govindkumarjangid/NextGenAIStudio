import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ResumePreview from '../ResumePreview';
import { dummyResumeData } from '../../../../assets/assets';

const PreviewPage = () => {
    const { resumeId } = useParams();
    const [resumeData, setResumeData] = useState(null);
    const [loading, setLoading] = useState(false);

    const loadResume = async () => {
        setResumeData(dummyResumeData.find(resume => resume._id === resumeId || null));
    };

    useEffect(() => {
        if (resumeId) loadResume();
    }, [resumeId]);

    if (loading) {
        return <div className="flex items-center justify-center min-h-screen text-white text-xl">Loading...</div>;
    }

    if (!resumeData) {
        return <div className="flex items-center justify-center min-h-screen text-white text-xl">Resume not found</div>;
    }

    return (
        <div className="min-h-screen bg-[#00232d] flex justify-center py-10 px-4 overflow-x-auto print:bg-transparent print:py-0 print:px-0">
            <div
                className="bg-white shadow-2xl overflow-hidden text-black print:shadow-none print:m-0 print:p-0 mx-auto"
                style={{
                    width: '8.5in',
                    minHeight: '11in',
                    wordWrap: 'break-word',
                    wordBreak: 'break-word',
                    whiteSpace: 'pre-line'
                }}
            >
                <ResumePreview
                    data={resumeData}
                    template={resumeData.template}
                    accentColor={resumeData.accent_color}
                />
            </div>
        </div>
    )
}

export default PreviewPage;