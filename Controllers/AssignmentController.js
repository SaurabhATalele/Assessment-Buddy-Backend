const Assignment = require("../Models/Assignment.js");
const nodeMailer = require("nodemailer");


// create a transporter object using the default gmail setup for nodemailer 
const transporter = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'saurabhtalele1122@gmail.com',
      pass: 'gtne ocae rvfu wyjk',
    },
});

const sendMail = async (req, res) => {
    const { email, subject, text,assignment } = req.body;
    const user = req.user;
    
    try {
        const data = await Assignment.find({_id:assignment,organization:user.organization});
        if(!data){
          res.status(403).json({message:"You are not authorized to schedule assessment"})
        }
        const mailOptions = {
        from: "saurabhatalele@gmail.com",
        to: email,
        subject: subject,
        html: text,
        };
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: "Mail sent successfully." });
    }
    catch (error) {
        console.log(error);
    }
};

// get all the assignments
const getAssignments = async (req, res) => {
  try {
    const assignments = await Assignment.find();
    res.status(200).json({ assignments });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};


// get all the assignments by organization id
const getAssignmentsByOrg = async (req, res) => {
  const { id } = req.params;
  try {
    const assignment = await Assignment.findById({ organization: id });
    res.status(200).json({ assignment });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};


// create a new assignment
const createAssignment = async (req, res) => {
  const assignment = req.body;
  const newAssignment = new Assignment(assignment);
  try {
    await newAssignment.save();
    res.status(201).json({ newAssignment });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};


// deleting an assignment
const deleteAssignment = async (req, res) => {
  const { id } = req.params;
  try {
    await Assignment.findByIdAndRemove(id);
    res.status(200).json({ message: "Assignment deleted successfully." });
  } catch (error) {
    console.log(error);
  }
};


// Assigning an assignment to a candidate
const AssignToCandidate = async (req, res) => {
  const data = req.body;
  const { id } = req.params;
  try {
    const assignment = await Assignment.findById(id);
    assignment.AssignedTo.push(data);
    await assignment.save();
    res.status(200).json({ assignment });
  } catch (error) {
    console.log(error);
  }
};

// export the functions 
module.exports = {
  getAssignments,
  getAssignmentsByOrg,
  createAssignment,
  deleteAssignment,
  sendMail
};
