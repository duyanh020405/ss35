import React, { useState } from 'react';

export default function Bt11() {
    const [file, setFile] = useState<string | null>(null);
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files[0]) {
            const fileUrl = URL.createObjectURL(files[0]);
            setFile(fileUrl);
        }
    };

    return (
        <div>
            <input type="file" accept="image/*" onChange={handleFileChange} />
            {file && <img src={file} alt="Selected" style={{height:200,width:200}} // accepct: kiểu bắt buôcj 
            />}
        </div>
    );
}
