const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();


//Express Initialize App
const app = express();

//Middleware
app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:5173',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true
}));

//Auth
const authRoutes = require('./routes/Auth/authRoutes');
app.use('/api', authRoutes);

//Services
const OnlineReputationRoutes = require('./routes/services/OnlineReputation');
const CorporateReputation = require('./routes/services/CorporateReputation');
const CelebrityReputationRoutes = require('./routes/services/CelebrityReputation');
const BrandReputationRoutes = require('./routes/services/BrandReputation');
const DigitalMarketingRoutes = require('./routes/services/DigitalMarketing');
const socialContentRoutes = require('./routes/services/SocialContent');
const searchEngineRoutes = require('./routes/services/SearchEngine');
const payPerRoutes = require('./routes/services/PayPer');
const webDesigningRoutes = require('./routes/services/WebDesign');
const websiteRoutes = require('./routes/services/Website');
// Seo
const enterPriceContentRoutes = require('./routes/Seo/EnterPriceContentRoutes');
const localContentRoutes = require('./routes/Seo/localContentRoutes');
const WhiteLabelContentRoutes = require('./routes/Seo/WhiteLabelContentRoutes');
const GoogleRecovery = require('./routes/Seo/GoogleRecovery');
const resellerContentRoutes = require('./routes/Seo/resellerContentRoutes');
const TechnicalContentRoutes = require('./routes/Seo/TechnicalContentRoutes');
const seoAuditContentRoutes = require('./routes/Seo/seoAuditContentRoutes');
const businessContentRoutes = require('./routes/Seo/businessContentRoutes');
const videoContentRoutes = require('./routes/Seo/videoContentRoutes');

// Design Development
const responsiveContentRoutes = require('./routes/DesignDevelopment/responsiveContentRoutes');
const eCommerceRoutes = require('./routes/DesignDevelopment/eCommerceRoutes');
const phpDevelopmentRoutes = require('./routes/DesignDevelopment/phpDataRoutes');
const laravelRoutes = require('./routes/DesignDevelopment/LaravelDevelopment');
const magentoDevelopmentRoutes = require('./routes/DesignDevelopment/MagentoDevelopment');
const DesignECommerceRoutes = require('./routes/DesignDevelopment/EcommerceWebsite');
const flashDataRoutes = require('./routes/DesignDevelopment/FlashAnimation');
const graphicDesignRoutes = require('./routes/DesignDevelopment/GraphicDesign');


//Industries
const industriesECommerceRoutes = require('./routes/Industries/ECommerceRoutes');
const manufacturingRoutes = require('./routes/Industries/manufacturingRoutes');
const lawFirmContentRoutes = require('./routes/Industries/lawFirmContent');
const AccountingRoutes = require('./routes/Industries/accountingRoutes');
const ElectronicRoutes = require('./routes/Industries/ElectronicRoutes');
const mediaContentRoutes = require('./routes/Industries/mediaContentRoutes');
const educationRoutes = require('./routes/Industries/EducationRoutes');
const onlineCourseRoutes = require('./routes/Industries/OnlineCoursesRoutes');

// E-commerce Marketing
const advertiseRoutes = require('./routes/EcommerceMarketing/AmazonAdvertise');
const marketingRoutes = require('./routes/EcommerceMarketing/AmazonMarketing');
const amazonContentRoutes = require('./routes/EcommerceMarketing/AmazonSeo');
const amazonPostRoutes = require('./routes/EcommerceMarketing/AmazonPost');
const amazonSellerRoutes = require('./routes/EcommerceMarketing/AmazonSeller');
const amazonStoreRoutes = require('./routes/EcommerceMarketing/AmazonStore');
const ecommerceOpRoutes = require('./routes/EcommerceMarketing/EcommerceOp');
const ecommercePpcRoutes = require('./routes/EcommerceMarketing/EcommercePpc');
const ecommerceSeoRoutes = require('./routes/EcommerceMarketing/EcommerceSeo');
const shopifySeoRoutes = require('./routes/EcommerceMarketing/ShopifySeo');


// Services
app.use('/api/online-reputation', OnlineReputationRoutes);
app.use('/api/corporate-reputation', CorporateReputation);
app.use('/api/celebrity-reputation', CelebrityReputationRoutes);
app.use('/api/brand-reputation', BrandReputationRoutes);
app.use('/api/digital-marketing', DigitalMarketingRoutes);
app.use('/api/socialcontent', socialContentRoutes);
app.use('/api/search-engine', searchEngineRoutes);
app.use('/api/payper', payPerRoutes);
app.use('/api/web-designing', webDesigningRoutes);
app.use('/api/website', websiteRoutes);

//Seo
app.use('/api/enterPriceContent', enterPriceContentRoutes);
app.use('/api/local-content', localContentRoutes);
app.use('/api/white-label', WhiteLabelContentRoutes);
app.use('/api/GoogleRecovery', GoogleRecovery);
app.use('/api/reseller', resellerContentRoutes);
app.use('/api/technical-content', TechnicalContentRoutes);
app.use('/api/audit-content', seoAuditContentRoutes);
app.use('/api/business-content', businessContentRoutes);
app.use('/api/video-content', videoContentRoutes);

//Design Development
app.use('/api/responsive-content', responsiveContentRoutes);
app.use('/api/ecommerce', eCommerceRoutes);
app.use('/api/php-development', phpDevelopmentRoutes);
app.use('/api/laravel', laravelRoutes);
app.use('/api/magento-development', magentoDevelopmentRoutes);
app.use('/api/design-ecommerce', DesignECommerceRoutes);
app.use('/api/flash-data', flashDataRoutes);
app.use('/api/graphic-designs', graphicDesignRoutes);

//Industries
app.use('/api/industriesECommerce', industriesECommerceRoutes);
app.use('/api/manufacturing', manufacturingRoutes);
app.use('/api/lawfirmcontent', lawFirmContentRoutes);
app.use('/api/accounting-content', AccountingRoutes);
app.use('/api/content', ElectronicRoutes);
app.use('/api/media-content', mediaContentRoutes);
app.use('/api/educational', educationRoutes);
app.use('/api/online-content', onlineCourseRoutes);


//E-commerce marketing
app.use('/api/advertise-content', advertiseRoutes);
app.use('/api/marketing-content', marketingRoutes);
app.use('/api/amazon-content', amazonContentRoutes);
app.use('/api/amazon-posts', amazonPostRoutes);
app.use('/api/amazon-seller', amazonSellerRoutes);
app.use('/api/amazon-store', amazonStoreRoutes);
app.use('/api/ecommerceOp', ecommerceOpRoutes);
app.use('/api/ecommercePpc', ecommercePpcRoutes);
app.use('/api/ecommerceSeo', ecommerceSeoRoutes);
app.use('/api/shopifySeo', shopifySeoRoutes);

//updateBySchema
app.use('/api/updateBySchema', require("./routes/updateBySchema/updateBySchemaRoutes"));


// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectDB();
});

