// ── Quick Booking ──
document.getElementById('quickBookBtn').addEventListener('click', function(e) {
    e.preventDefault();
    openQuickBookingModal();
});

function openQuickBookingModal() {
    modalContent.innerHTML = `
        <h3><i class="fas fa-calendar-plus" style="color:#0b5e3b;"></i> Quick Booking</h3>
        <p>Enter your details and we'll arrange a pickup.</p>
        <form id="quickBookingForm" style="text-align:left;">
            <div class="form-group">
                <label for="quickName"><i class="fas fa-user"></i> Full Name</label>
                <input type="text" id="quickName" placeholder="Jomiloju Ogunleye" />
            </div>
            <div class="form-group">
                <label for="quickPhone"><i class="fas fa-phone-alt"></i> Contact Number</label>
                <input type="tel" id="quickPhone" placeholder="080 1234 5678" />
            </div>
            <div class="form-group">
                <label for="quickAddress"><i class="fas fa-map-pin"></i> Residential Address</label>
                <input type="text" id="quickAddress" placeholder="hyaganku, Ogbomoso, Oyo State" />
            </div>
            <div class="form-group">
                <label for="quickEmail"><i class="fas fa-envelope"></i> Email Address</label>
                <input type="email" id="quickEmail" placeholder="jomiloju@example.com" />
            </div>
            <div class="form-group">
                <label for="quickTime"><i class="fas fa-clock"></i> Preferred Time</label>
                <input type="datetime-local" id="quickTime" />
            </div>
            <button type="submit" class="btn-primary" id="quickBookingSubmit" style="margin-top:4px;"><i class="fas fa-check-circle"></i> Request Pickup</button>
        </form>
        <div style="margin-top:12px;">
            <button class="btn-cancel" id="quickBookingCancel" style="padding:10px 24px;">Cancel</button>
        </div>
    `;
    sharedModal.classList.add('active');

    // Pre-fill email and name from dashboard (if available)
    const currentName = dashboardUserName.textContent;
    if (currentName && currentName !== 'Jomiloju') {
        document.getElementById('quickName').value = currentName;
    } else {
        document.getElementById('quickName').value = 'Jomiloju Ogunleye';
    }
    document.getElementById('quickEmail').value = 'jomiloju@example.com';

    // Submit handler
    document.getElementById('quickBookingSubmit').addEventListener('click', function(e) {
        e.preventDefault();
        const name = document.getElementById('quickName').value.trim();
        const phone = document.getElementById('quickPhone').value.trim();
        const address = document.getElementById('quickAddress').value.trim();
        const email = document.getElementById('quickEmail').value.trim();
        const time = document.getElementById('quickTime').value;

        if (!name || !phone || !address || !email || !time) {
            alert('Please fill in all fields.');
            return;
        }

        // Close modal and show success
        sharedModal.classList.remove('active');
        alert(`✅ Quick booking requested!\n\nName: ${name}\nPhone: ${phone}\nAddress: ${address}\nEmail: ${email}\nPreferred Time: ${new Date(time).toLocaleString()}`);
    });

    // Cancel button
    document.getElementById('quickBookingCancel').addEventListener('click', function() {
        sharedModal.classList.remove('active');
    });

    // Close on outside click
    sharedModal.addEventListener('click', function handler(e) {
        if (e.target === sharedModal) {
            sharedModal.classList.remove('active');
            sharedModal.removeEventListener('click', handler);
        }
    });
}