import re
from reg import OR_RGXS, URIS

uriInput = 'https://eur-de.orders.sp.com';

if any(re.match(rex, uriInput) for rex in OR_RGXS):
	print('OK ELENA')
else:
	print('NOOOO')

# for rex in regx:
# 	if re.match(rex, uriInput):
# 		print('1111')
# if uriInput in uris:
# 	print('Yes')
# elif any(re.match(rex, uriInput) for rex in regx):
# 	print('REX {}'.format(rex))
# else:
# 	print('No')