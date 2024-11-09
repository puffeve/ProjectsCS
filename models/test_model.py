from tensorflow.keras.models import load_model

# โหลดโมเดลจากไฟล์ .h5
model = load_model('models/model.h5')

# แสดงสรุปของโมเดล
model.summary()
