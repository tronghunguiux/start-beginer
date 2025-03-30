# start-beginer
<!-- library use -->
async-exit-hook
dotenv
express
mongodb
nodemon
http-status-codes: [link](https://www.npmjs.com/package/http-status-codes)
Joi: [link](https://www.npmjs.com/package/joi)
    -[custom message Joi](https://stackoverflow.com/questions/48720942/node-js-joi-how-to-display-a-custom-error-messages/68092831#68092831)
    - [doc custom message](https://github.com/hapijs/joi/blob/master/lib/types/string.js#L694)
Cross-evn (v7.0.3): [link](https://www.npmjs.com/package/cross-env) 

# Tree Folder Structure
node-api/
│── dist/                           # Build compile folder
│── node_modules/                   # Module npm build 
│── src/                            # Main Sources
│   │── config/                     # Cấu hình ứng dụng
│   │   │── cors.js                 # Cấu hình CORS (Cross-Origin Resource Sharing) cho API.
│   │   │── environment.js          # Quản lý biến môi trường (ENV).
│   │   │── mongodb.js              # Kết nối và thiết lập MongoDB.
│   │── controllers/                # Xử lý logic API
│   │   │── examController.js       # Ví dụ xử lý logic API
│   │── middlewares/                # Xử lý trung gian Kiểm tra xác thự (authentication, authorization)
│   │   │── examMiddleware.js       # 
│   │── models/                     # định nghĩa cấu trúc dữ liệu của bảng hoặc collection.
│   │── providers/                  # Lớp cung cấp dữ liệu. Truy xuất dữ liệu từ cơ sở dữ liệu hoặc các nguồn dữ liệu
│   │   │── examProvider.js         # 
│   │── routes/                     # Xử điều hướng API
│   │   │── v1/                     # 
│   │   │   │── examRoute.js        # 
│   │   │   │── index.js            # 
│   │   │── v2/                     # 
│   │   │   │── examRoute.js        # 
│   │   │   │── index.js            # 
│   │── services/                   # Xử lý nghiệp vụ controllers - providers - models
│   │   │── examService.js          # 
│   │── sockets/                    # Quản lý WebSocket. Xử lý giao tiếp theo thời gian thực giữa client và server
│   │   │── examSocket.js           # 
│   │── utils/                      # Chứa các hàm tiện ích
│   │   │── algorithms.js           # Chứa các thuật toán xử lý dữ liệu
│   │   │── constants.js            # Chứa hằng số / các biến chung
│   │   │── sorts.js                # Thuật toán sắp xếp sort/filter
│   │── validations/                # Validation data 
│   │   │── examValidation.js       # 
│   │── server.js                   # Main file start server 
│── .babelrc                        # Cấu hình Babel (nếu dùng TypeScript hoặc ES6).
│── .env                            # Chứa biến môi trường.
│── .env.dev                        # Biến môi trường cho môi trường phát triển.
│── .env.example                    # Mẫu file .env để chia sẻ với team.
│── .env.prod                       # Biến môi trường cho môi trường production.
│── .eslintrc.cjs                   # 
│── jsconfig.json                   # 




