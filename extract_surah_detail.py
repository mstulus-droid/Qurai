import pandas as pd

df = pd.read_excel('qx.xlsx', sheet_name='bedah')

for surat in range(70, 102):
    sc = df[df['surat'] == surat]
    if len(sc) == 0:
        continue
    surat_name = str(sc.iloc[0]['Surat IDN']) if pd.notna(sc.iloc[0]['Surat IDN']) else ''
    fname = f'surat_{surat}_detail.txt'
    with open(fname, 'w', encoding='utf-8') as f:
        f.write(f'SURAT {surat}: {surat_name}\n')
        f.write('=' * 80 + '\n\n')
        for _, row in sc.iterrows():
            ayat = int(row['ayat']) if pd.notna(row['ayat']) else '?'
            f.write(f'Ayat {ayat}\n')
            if pd.notna(row['Topik']):
                f.write(f"Topik: {row['Topik']}\n")
            if pd.notna(row['Terjemahan (Departemen Agama)']):
                f.write(f"Terjemahan: {row['Terjemahan (Departemen Agama)']}\n")
            if pd.notna(row['Kritik']):
                f.write(f"Kritik: {row['Kritik']}\n")
            if pd.notna(row['CONTRADICTIONS']):
                f.write(f"CONTRADICTIONS (SUDAH ADA): {row['CONTRADICTIONS']}\n")
            f.write('-' * 40 + '\n\n')
    print(f'Extracted {fname}')
