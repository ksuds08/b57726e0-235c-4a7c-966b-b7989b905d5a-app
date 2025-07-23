import { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(request: VercelRequest, response: VercelResponse) {
    if (request.method === 'POST') {
        const { name, email, jobHistory, skills, careerObjective } = request.body;

        // Simulate AI processing and template generation
        const dummyResume = `Name: ${name}\nEmail: ${email}\n\nJob History:\n${jobHistory}\n\nSkills:\n${skills}\n\nCareer Objective:\n${careerObjective}\n\nIndustry-Specific Customization and ATS Optimization included.`;

        // Respond with a success message and the generated resume
        response.status(200).json({ success: true, resume: dummyResume });
    } else {
        response.status(405).json({ success: false, error: 'Method not allowed' });
    }
}