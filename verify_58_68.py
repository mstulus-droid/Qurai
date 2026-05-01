import pandas as pd
df = pd.read_excel('qx.xlsx', sheet_name='bedah')
c = df[(df['surat'] >= 58) & (df['surat'] <= 68) & (df['CONTRADICTIONS'].notna())]
print('Surat 58-68 contradictions:')
for _, r in c.iterrows():
    print(f"  Surat {int(r['surat'])}, Ayat {int(r['ayat'])}")
print(f'Total: {len(c)}')
