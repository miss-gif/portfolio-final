// src/components/FileManager.js
import React, { useState } from "react";
import { storage } from "../../firebaseConfig";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";

const FileManager = () => {
  const [file, setFile] = useState(null);
  const [files, setFiles] = useState([]);

  const uploadFile = async () => {
    if (!file) return;
    const storageRef = ref(storage, `files/${file.name}`);
    await uploadBytes(storageRef, file);
    fetchFiles();
  };

  const fetchFiles = async () => {
    const listRef = ref(storage, "files/");
    const res = await listAll(listRef);
    const urls = await Promise.all(
      res.items.map((item) => getDownloadURL(item))
    );
    setFiles(urls);
  };

  return (
    <div>
      <h2>파일 관리</h2>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={uploadFile}>업로드</button>
      <button onClick={fetchFiles}>파일 불러오기</button>
      <ul>
        {files.map((url, index) => (
          <li key={index}>
            <a href={url} target="_blank" rel="noopener noreferrer">
              파일 {index + 1}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileManager;
