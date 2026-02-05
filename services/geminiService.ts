import { GoogleGenAI } from "@google/genai";

export const generateMikrotikConfig = async (prompt: string): Promise<string> => {
  // Sesuai pedoman @google/genai, API Key harus diambil eksklusif dari process.env.API_KEY
  const apiKey = process.env.API_KEY;

  if (!apiKey) {
     throw new Error("API Key tidak ditemukan. Pastikan environment variable API_KEY sudah diset.");
  }

  const ai = new GoogleGenAI({ apiKey });
  const model = 'gemini-3-flash-preview'; // Menggunakan model rekomendasi untuk tugas teks

  const systemPrompt = `You are a Senior Network Engineer specializing in MikroTik RouterOS. 
    Your task is to help users configure their routers by generating accurate CLI scripts.
    
    GUIDELINES:
    1. Output MUST be valid RouterOS script commands.
    2. Provide a clear and concise technical explanation BEFORE the script block.
    3. The script block should be formatted as code.
    4. CRITICAL RULE: You MUST add a comment line starting with '#' before EVERY single command or logical block. The comment must explain exactly what the command does in Indonesian.
    5. Ensure the script is complete and ready to copy-paste into the Terminal.
    6. Language: INDONESIAN (Bahasa Indonesia).
    
    FORMAT EXAMPLE:
    ### Penjelasan
    Berikut adalah konfigurasi dasar untuk bridge dan IP address.
    
    ### Script Konfigurasi
    \`\`\`routeros
    # 1. Membuat interface bridge baru untuk menggabungkan port LAN
    /interface bridge add name=bridge-lan

    # 2. Menambahkan port ether2 ke dalam bridge-lan
    /interface bridge port add interface=ether2 bridge=bridge-lan

    # 3. Menambahkan port ether3 ke dalam bridge-lan
    /interface bridge port add interface=ether3 bridge=bridge-lan

    # 4. Konfigurasi IP Address Gateway pada interface bridge
    /ip address add address=192.168.1.1/24 interface=bridge-lan comment="Gateway LAN"
    
    # 5. Mengaktifkan DNS server dan mengizinkan remote request
    /ip dns set servers=8.8.8.8,8.8.4.4 allow-remote-requests=yes
    \`\`\`
    `;

  try {
    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        systemInstruction: systemPrompt,
      },
    });

    return response.text || "Maaf, saya tidak dapat menghasilkan konfigurasi saat ini.";
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    // Lempar error agar bisa ditangkap di UI
    throw new Error(error.message || "Gagal menghubungi Gemini AI.");
  }
};