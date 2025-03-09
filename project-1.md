**Project 1: AWS**

**Creating a Highly Available Backend Application with AWS**

### **Advantages:**

1. **Highly Available** – Ensures minimal downtime and maximum uptime by deploying multiple instances across different Availability Zones.
2. **Secure Connection** – Implements security best practices using Security Groups and inbound/outbound rules.
3. **Scalable Infrastructure** – The system can be scaled horizontally by adding more EC2 instances and integrating Auto Scaling Groups.

### **AWS Services Used:**

1. **VPC (Virtual Private Cloud)** – Provides a logically isolated network environment.
2. **EC2 (Elastic Compute Cloud)** – Hosts the backend application.
3. **Subnets** – Divides the VPC into multiple sections for high availability.
4. **Internet Gateway** – Allows external internet access to public resources.
5. **Route Table** – Manages traffic routing within the VPC.
6. **Security Group** – Defines firewall rules for controlling access.
7. **Application Load Balancer (ALB)** – Distributes traffic across multiple instances.
8. **Target Group** – Registers EC2 instances to manage incoming traffic distribution.
9. **AMI (Amazon Machine Image)** – Creates reusable instance configurations.

### **Step-by-Step Deployment Process:**

#### **1. Networking Setup:**

1. **Create a VPC** – Define a custom Virtual Private Cloud with an appropriate CIDR block (e.g., `10.0.0.0/16`).
2. **Create Three Subnets** –
   - Place each subnet in a different Availability Zone to ensure redundancy.
   - Assign appropriate CIDR blocks (e.g., `10.0.1.0/24`, `10.0.2.0/24`, `10.0.3.0/24`).
3. **Create an Internet Gateway** – Attach it to the VPC to allow internet access.
4. **Create a Route Table** –
   - Add a default route (`0.0.0.0/0`) pointing to the Internet Gateway.
   - Associate the route table with public subnets.
5. **Attach the Internet Gateway to the VPC** – Ensures connectivity for instances in public subnets.
6. **Associate the Route Table with Subnets** – Allows communication between resources and the internet.

#### **2. Security Configuration:**

7. **Create a Security Group** –
   - Define a firewall rule set to control access to EC2 instances.
   - Allow **SSH (port 22)** for remote access.
   - Allow **HTTP (port 3000)** for application access.
8. **Configure Inbound and Outbound Rules:**
   - Inbound Rules:
     - Allow **SSH** (port 22) from specific IPs.
     - Allow **HTTP** (port 3000) from all (`0.0.0.0/0`).
   - Outbound Rules:
     - Allow all traffic to ensure unrestricted outgoing connections.

#### **3. EC2 Instance Setup:**

9. **Launch an EC2 Instance (server-1) in the First Subnet** –
   - Use an Ubuntu or Amazon Linux AMI.
   - Select an instance type (e.g., `t2.micro`).
   - Assign a key pair for SSH access.
   - Attach the previously created Security Group.
10. **Connect to the EC2 Instance** –
    - Use SSH via terminal (`ssh -i key.pem ec2-user@<public-ip>`).
    - Alternatively, use AWS Session Manager or EC2 Instance Connect.

#### **4. Application Deployment:**

11. **Install Git** – Required to clone the project repository:
    ```sh
    sudo apt update && sudo apt install git -y
    ```
12. **Clone the Sample Project** –
    ```sh
    git clone <repository-url>
    ```
13. **Install Node.js and Nodemon Globally** –
    ```sh
    curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
    sudo apt install -y nodejs
    sudo npm install -g nodemon
    ```
14. **Navigate to the Project Directory** –
    ```sh
    cd <project-directory>
    ```
15. **Install Dependencies** –
    ```sh
    npm install
    ```
16. **Start the Application** –
    ```sh
    nodemon server.js
    ```

#### **5. Scaling the Application:**

17. **Create an AMI of the EC2 Instance** –
    - Go to **EC2 Dashboard** → Select the instance → Click **Actions** → **Create Image**.
18. **Launch Two Additional EC2 Instances in the Other Subnets** –
    - Use the previously created AMI to ensure identical configurations.
19. **Start the Application on the New Instances** –
    - Repeat Steps 10–16 for each new instance.

#### **6. Load Balancing for High Availability:**

20. **Create a Target Group** –
    - Navigate to **EC2 Dashboard** → **Load Balancing** → **Target Groups**.
    - Create a **Target Group** for **HTTP traffic on port 3000**.
    - Register all three EC2 instances in the target group.
21. **Set Up an Application Load Balancer (ALB)** –
    - Navigate to **Load Balancers** → Click **Create Load Balancer**.
    - Choose **Application Load Balancer**.
    - Attach it to the **VPC** and **public subnets**.
    - Configure it to forward traffic to the previously created target group.
22. **Verify Application Availability:**
    - Copy the **DNS name** of the ALB.
    - Open a browser and enter `http://<ALB-DNS-Name>:3000`.
    - If successful, the application should be accessible and traffic should be distributed across instances.

### **Conclusion:**

This setup ensures a **highly available, secure, and scalable** backend application using AWS infrastructure. By distributing instances across different Availability Zones and using an Application Load Balancer, the system achieves fault tolerance and improved performance. This configuration can be further optimized by integrating Auto Scaling Groups for dynamic scaling based on traffic load.
