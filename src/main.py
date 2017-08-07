# IPM analyser
# Created by
# Rizky Faramita
# Aldrich Valentino Halim
# Using Python 3, Anaconda, Pandas, and Matplotlib

import numpy as np
import pandas as pd
from IPython.display import display
from sklearn.linear_model import LinearRegression
import matplotlib.pyplot as plt

# import raw data
raw_data_kesehatan = pd.read_csv("../data/data-kesehatan.csv")
raw_data_kesehatan.head(2)
raw_data_ipm = pd.read_csv("../data/data-ipm.csv")
raw_data_ipm.head(2)

# filter missing data
filtered_data_kesehatan = raw_data_kesehatan[-np.isnan(raw_data_kesehatan["tahun"])]
filtered_data_kesehatan.drop_duplicates()
filtered_data_kesehatan.head(3)
filtered_data_ipm = raw_data_ipm[-np.isnan(raw_data_ipm["tahun"])]
filtered_data_ipm.drop_duplicates()
filtered_data_ipm.head(3)

# show
display(filtered_data_kesehatan)
display(filtered_data_ipm)

# merged the dataset using inner join
joined_dataset = pd.merge(filtered_data_kesehatan, filtered_data_ipm, how='inner', on='tahun')

# show
display(joined_dataset)

# linear regression
npMatrix = np.matrix(joined_dataset)
X, Y = npMatrix[:, 1], npMatrix[:, 2]
mdl = LinearRegression().fit(X, Y)  # either this or the next line
# mdl = LinearRegression().fit(filtered_data[['x']],filtered_data.y)
m = mdl.coef_[0]
b = mdl.intercept_
print("formula: y = {0}x + {1}".format(m, b))  # following slope intercept form

# plotting
plt.scatter(X,Y, color='blue')
plt.plot([0,100],[b,m*100+b],'r')
plt.title('Linear Regression Of Data Provinsi', fontsize=20)
plt.xlabel('X', fontsize=15)
plt.ylabel('Y', fontsize=15)
plt.show()
