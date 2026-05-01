import pandas as pd
df = pd.read_excel('qx.xlsx', sheet_name='bedah')
c = df[(df['surat'] >= 70) & (df['surat'] <= 101) & (df['CONTRADICTIONS'].notna())]
for _, r in c.iterrows():
    print(f"Surat {int(r['surat'])}, Ayat {int(r['ayat'])}: {str(r['CONTRADICTIONS'])[:100]}...")
