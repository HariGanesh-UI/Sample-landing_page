const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files (index.html, CSS, images, etc.)
app.use(express.static(__dirname));

// ============================================================
// DEMO LEADS DATABASE (JSON file)
// ============================================================
const LEADS_FILE = path.join(__dirname, 'demo-leads.json');

// Initialize leads file if it doesn't exist
if (!fs.existsSync(LEADS_FILE)) {
    fs.writeFileSync(LEADS_FILE, JSON.stringify([], null, 2));
}

function readLeads() {
    try {
        const data = fs.readFileSync(LEADS_FILE, 'utf8');
        return JSON.parse(data);
    } catch {
        return [];
    }
}

function writeLeads(leads) {
    fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2));
}

// ============================================================
// API ROUTES
// ============================================================

// POST /api/demo-request — Submit a new demo lead
app.post('/api/demo-request', (req, res) => {
    const {
        firstName, lastName, email, phone,
        company, jobTitle, companySize, city,
        interest, projects, message
    } = req.body;

    // Validation
    if (!firstName || !lastName || !email || !phone) {
        return res.status(400).json({
            success: false,
            error: 'Missing required fields: firstName, lastName, email, phone'
        });
    }

    if (!company || !jobTitle || !companySize) {
        return res.status(400).json({
            success: false,
            error: 'Missing required fields: company, jobTitle, companySize'
        });
    }

    if (!interest) {
        return res.status(400).json({
            success: false,
            error: 'Missing required field: interest'
        });
    }

    // Create lead record
    const lead = {
        id: Date.now().toString(36) + Math.random().toString(36).substr(2, 5),
        firstName,
        lastName,
        email,
        phone,
        company,
        jobTitle,
        companySize,
        city: city || '',
        interest,
        projects: projects || '',
        message: message || '',
        submittedAt: new Date().toISOString(),
        source: 'website-demo-request',
        status: 'new'
    };

    // Save to file
    const leads = readLeads();
    leads.push(lead);
    writeLeads(leads);

    console.log('\n========================================');
    console.log('📋 NEW DEMO LEAD RECEIVED!');
    console.log('========================================');
    console.log(`  Name:      ${lead.firstName} ${lead.lastName}`);
    console.log(`  Email:     ${lead.email}`);
    console.log(`  Phone:     ${lead.phone}`);
    console.log(`  Company:   ${lead.company} (${lead.companySize})`);
    console.log(`  Role:      ${lead.jobTitle}`);
    console.log(`  City:      ${lead.city || 'N/A'}`);
    console.log(`  Interest:  ${lead.interest}`);
    console.log(`  Projects:  ${lead.projects || 'N/A'}`);
    console.log(`  Message:   ${lead.message || 'N/A'}`);
    console.log(`  Time:      ${lead.submittedAt}`);
    console.log(`  Lead ID:   ${lead.id}`);
    console.log(`  Total Leads: ${leads.length}`);
    console.log('========================================\n');

    res.json({
        success: true,
        message: 'Demo request submitted successfully!',
        leadId: lead.id
    });
});

// GET /api/demo-leads — View all demo leads (admin endpoint)
app.get('/api/demo-leads', (req, res) => {
    const leads = readLeads();
    res.json({
        success: true,
        total: leads.length,
        leads
    });
});

// GET /api/demo-leads/:id — View a specific lead
app.get('/api/demo-leads/:id', (req, res) => {
    const leads = readLeads();
    const lead = leads.find(l => l.id === req.params.id);
    if (!lead) {
        return res.status(404).json({ success: false, error: 'Lead not found' });
    }
    res.json({ success: true, lead });
});

// DELETE /api/demo-leads/:id — Delete a lead
app.delete('/api/demo-leads/:id', (req, res) => {
    let leads = readLeads();
    const index = leads.findIndex(l => l.id === req.params.id);
    if (index === -1) {
        return res.status(404).json({ success: false, error: 'Lead not found' });
    }
    const removed = leads.splice(index, 1)[0];
    writeLeads(leads);
    console.log(`🗑️  Lead deleted: ${removed.firstName} ${removed.lastName} (${removed.email})`);
    res.json({ success: true, message: 'Lead deleted' });
});

// ============================================================
// START SERVER
// ============================================================
app.listen(PORT, () => {
    console.log('');
    console.log('  ╔══════════════════════════════════════════════╗');
    console.log('  ║                                              ║');
    console.log('  ║   🏗️  BuildersNova Landing Page Server       ║');
    console.log('  ║                                              ║');
    console.log(`  ║   🌐 http://localhost:${PORT}                   ║`);
    console.log('  ║                                              ║');
    console.log('  ║   API Endpoints:                             ║');
    console.log(`  ║   POST /api/demo-request  → Submit lead      ║`);
    console.log(`  ║   GET  /api/demo-leads    → View all leads   ║`);
    console.log('  ║                                              ║');
    console.log('  ╚══════════════════════════════════════════════╝');
    console.log('');
    const leads = readLeads();
    console.log(`  📊 Existing leads in database: ${leads.length}`);
    console.log('  📁 Leads file: demo-leads.json');
    console.log('');
});
