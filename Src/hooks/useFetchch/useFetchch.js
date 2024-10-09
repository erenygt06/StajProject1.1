import { useState } from 'react';
import axios from 'axios';

function useFetchch() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // POST isteği yapma fonksiyonu
  const post = async (url, apiData) => {
    setLoading(true); // Yüklemeyi başlat
    setError(null); // Hataları sıfırla

    console.log('API isteği yapılıyor:', url, apiData); // İstek yapılmadan önce loglayalım

    try {
      const response = await axios.post(url, apiData);
      
      console.log('API İsteği Başarılı:', response.data); // Başarılı istekten sonra veriyi logla
      setData(response.data); // Gelen cevabı state'e kaydet
    } catch (err) {
      console.log('API İsteği Hatası:', err.message); // Hata oluşursa logla
      setError(err.message || 'Bir hata oluştu');
    } finally {
      setLoading(false); // Yükleme bitti
    }
  };

  return { data, loading, error, post };
}

export default useFetchch;
