# 📝 TaskSphere

**TaskSphere** is a full-stack productivity platform that lets users manage their daily tasks efficiently.  
Users can register, log in, add new tasks, mark them as complete, and view when each task was created — all in a simple and responsive UI.

---

## 🚀 Tech Stack

**Frontend:**
- React.js  
- JavaScript (ES6)  
- Tailwind CSS  

**Backend:**
- Node.js  
- Express.js  
- MongoDB (with Mongoose)  
- JSON Web Token (JWT) for Authentication  

---

## ✨ Key Features

✅ **User Authentication** — Register a new account and securely log in using JWT.  
✅ **Add Tasks** — Create new tasks that are stored in the database.  
✅ **View Tasks** — Display all tasks dynamically on the dashboard.  
✅ **Task Timestamps** — Each task shows the exact date and time it was added.  
✅ **Mark as Completed** — Click a task to toggle its completion status.  
✅ **Responsive UI** — Built with Tailwind CSS to look great on desktop and mobile devices.

---

## 🧩 Project Structure
<img width="390" height="369" alt="Screenshot 2025-11-09 162001" src="https://github.com/user-attachments/assets/7cbc9e75-a3e9-49b7-aa36-7bd2cd17ea79" />

<img width="383" height="618" alt="Screenshot 2025-11-09 162132" src="https://github.com/user-attachments/assets/da3bcbce-592e-4619-a6eb-66e94e06479d" />

---

## 📸 Preview/Output 
### Step 1 : Register and Login 
<img width="1903" height="1026" alt="Screenshot 2025-11-09 165853" src="https://github.com/user-attachments/assets/782c5be7-cb39-41e2-a496-b86f903506c9" />

### Step 2 : Validates the user
<img width="1918" height="968" alt="Screenshot 2025-11-09 170847" src="https://github.com/user-attachments/assets/99d4dc5e-47ff-4820-9c16-ab3f8a95bf75" />

### Step 3 : Check the status of user tasks in the mongoDB
<img width="1908" height="1017" alt="Screenshot 2025-11-09 171008" src="https://github.com/user-attachments/assets/016a2f21-2270-44f7-95b7-455a5a3858b9" />

### Step 4 : Visit the website
<img width="1910" height="955" alt="Screenshot 2025-11-09 171109" src="https://github.com/user-attachments/assets/63791870-eab1-45fa-a05c-6eda77b8040f" />

### Step 5 : Add the tasks and check the status of complete true/false in the database(MongoDB)
<img width="1895" height="956" alt="Screenshot 2025-11-09 171221" src="https://github.com/user-attachments/assets/be0798a2-c426-4b0f-8a65-5adaa6c00d2f" />

### Task complete should be False
<img width="1917" height="1029" alt="Screenshot 2025-11-09 171313" src="https://github.com/user-attachments/assets/8d1c7d26-9d7d-4313-849a-74be2ac178af" />

### Step 6 : Mark the task complete by clicking on the task name and again check the status of complete true/false in the database(MongoDB)
<img width="1914" height="968" alt="Screenshot 2025-11-09 171434" src="https://github.com/user-attachments/assets/cd18c98e-0537-4d7e-9a34-5f7c1b2d560d" />

### Task complete should be True
<img width="1914" height="1019" alt="Screenshot 2025-11-09 171523" src="https://github.com/user-attachments/assets/e9624dff-3450-450e-8c5b-a5767ec7c91b" />

CLICK ON LOGOUT when done using the website


---

# 💡 Author

Developed by Chemallamudi Praveenya
Built with ❤️ using React, Node.js, and MongoDB.

---
## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/YOURUSERNAME/tasksphere.git
cd tasksphere
2️⃣ Backend Setup
bash
Copy code
cd backend
npm install
Create a .env file inside the backend folder and add:

in that
Copy code
MONGO_URI=your_mongodb_connection_link
JWT_SECRET=your_secret_key
Start the backend:

bash
Copy code
npm run dev
3️⃣ Frontend Setup
Open a new terminal tab:

bash
Copy code
cd frontend
npm install
npm start
🌐 Usage
Register a new account.

Log in using your registered email and password.

Add your tasks.

See the time when each task was added.

Click on a task to mark it as completed.

Logout when done.

---


Dark mode toggle

##Issues Found
- If you encountered this error

      PS D:\tasksphere\frontend> npm start
      
      > frontend@0.1.0 start
      > react-scripts start
      
      'react-scripts' is not recognized as an internal or external command,
      operable program or batch file.
- try this command
      PS D:\tasksphere\frontend> npm install react-scripts@5.0.1 --save-dev
