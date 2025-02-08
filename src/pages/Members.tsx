import React, { useEffect } from "react";
import ProfileCard from "../components/MembersCard"; // Assuming you have ProfileCard component in the same directory
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

// Sample data for the team members
const members = [
    {
    name: "Himanshu Bankar",
    designation: "Techanical Head",
    imageUrl:
      "https://res.cloudinary.com/dcpugzrqm/image/upload/v1738862171/techanical_head_wdxbey.png",
  },
    {
    name: "Varad Uprade",
    designation: "Secretary MCA",
    imageUrl:
      "https://res.cloudinary.com/dcpugzrqm/image/upload/v1738862134/Varad_Upgade_Secretary_MCA_I_yr_qxpns8.png",
  },

  {
    name: "Shweta Prajapati",
    designation: "Discipline Head",
    imageUrl:
      "https://res.cloudinary.com/dcpugzrqm/image/upload/v1738862126/Shweta_Prajapati_Discipline_Head_ooat8c.png",
  },
  {
    name: "Aboli Faye",
    designation: "Backdrop Head",
    imageUrl:
      "https://res.cloudinary.com/dcpugzrqm/image/upload/v1738862103/Aboli_Faye_Backdrop_head_cj163x.png",
  },
  {
    name: "Naziya Kapadiya",
    designation: "Co-Treasurer",
    imageUrl:
      "https://res.cloudinary.com/dcpugzrqm/image/upload/v1738862122/Naziya_Kapadia_co_treasurer_ytqftq.png",
  },
  {
    name: "Ria Saxena",
    designation: "Inaugral Head",
    imageUrl:
      "https://res.cloudinary.com/dcpugzrqm/image/upload/v1738862146/Riya_Saxena_Inaugral_Head_osvaed.png",
  },
  {
    name: "Omkar  Barhanpure",
    designation: "Sports Head",
    imageUrl:
      "https://res.cloudinary.com/dcpugzrqm/image/upload/v1738862150/sports_head_shpfrq.png",
  },
  {
    name: "Gunjan Mourya",
    designation: "Sports Head",
    imageUrl:
      "https://res.cloudinary.com/dcpugzrqm/image/upload/v1738866482/WhatsApp_Image_2025-02-06_at_23.53.00_e9093ad3_gevgxf.png",
  },


  {
    name: "Tanishq Shukla",
    designation: "Executive",
    imageUrl:
      "https://res.cloudinary.com/dcpugzrqm/image/upload/v1738862129/Tanishkq_Shukla_Executive_h7hfpx.png",
  },

  {
    name: "Taranpreet Kaur",
    designation: "Joint Secretary",
    imageUrl:
      "https://res.cloudinary.com/dcpugzrqm/image/upload/v1738862131/TARANPREET_KAUR_.Joint_secretary_BCA_I_yr_tpocec.png",
  },

  {
    name: "Darshana Chinchone",
    designation: "Co Executive  ",
    imageUrl:
      "https://res.cloudinary.com/dcpugzrqm/image/upload/v1738862138/Darshana_Chinchone_Co_Executive_une6cc.png",
  },

  {
    name: "Vedant Bipin Dubey",
    designation: "Co Executive  ",
    imageUrl:
      "https://res.cloudinary.com/dcpugzrqm/image/upload/v1738862140/Vedant_Dubey_Co_Executive_jetqxt.png",
  },

  {
    name: "Ayush Gurbani",
    designation: "Co Executive",
    imageUrl:
      "https://res.cloudinary.com/dcpugzrqm/image/upload/v1738862164/Ayush_Gurbani_Co_Executive_pxfllc.png",
  },

  {
    name: "Vedant Halde",
    designation: "CR",
    imageUrl:
      "https://res.cloudinary.com/dcpugzrqm/image/upload/v1738866310/WhatsApp_Image_2025-02-06_at_23.53.00_33ca7dfc_xxrcdh.jpg",
  },

  {
    name: "Abhayrajsingh Bopche",
    designation: "Commitee Member",
    imageUrl:
      "https://res.cloudinary.com/dcpugzrqm/image/upload/v1738866310/WhatsApp_Image_2025-02-06_at_23.52.59_28df5fc6_gpj3ix.jpg",
  },

  {
    name: "Jay Sharma",
    designation: "CDPC Member",
    imageUrl:
      "https://res.cloudinary.com/dcpugzrqm/image/upload/v1738866310/WhatsApp_Image_2025-02-06_at_23.52.59_677707c2_uwroaq.jpg",
  },

  {
    name: "Aastha Kalra",
    designation: "Co Executive",
    imageUrl:
      "https://res.cloudinary.com/dcpugzrqm/image/upload/v1738915833/Aastha_Kalra_Co_Executive_nx4zri.png",
  },

  {
    name: "Vritti Vasani",
    designation: "LR",
    imageUrl:
      "https://res.cloudinary.com/dcpugzrqm/image/upload/v1738916047/passportphoto-removebg_-_Vritti_Vasani_pghyzs.png",
  },

  {
    name: "Pratik Pohankar",
    designation: "Central SRC",
    imageUrl:
      "https://res.cloudinary.com/dcpugzrqm/image/upload/v1738918824/Clipped_image_20250206_220311_xt8n21.png",
  },

  {
    name: "Saksham Lanjewar",
    designation: "CDPC Member",
    imageUrl:
      "https://res.cloudinary.com/dcpugzrqm/image/upload/v1738936026/IMG_20250206_211809818_HDR-removebg-preview_fo02b5.png",
  },

  {
    name: "Lucky Meena",
    designation: "CDPC",
    imageUrl:
      "https://res.cloudinary.com/dcpugzrqm/image/upload/v1738919242/IMG-20250206-WA0008_-_LUCKY_MEENA-removebg-preview_mudz25.png",
  },

  {
    name: "Shreya Pandey",
    designation: "CDPC",
    imageUrl:
      "https://res.cloudinary.com/dcpugzrqm/image/upload/v1738919243/20250206192732971_-_Shreya_Pandey-removebg-preview_uog0uc.png",
  },

  {
    name: "Jahnavee Singh",
    designation: "CDPC",
    imageUrl:
      "https://res.cloudinary.com/dcpugzrqm/image/upload/v1738919243/SAVE_20250206_214502_-_Jahnavee_Singh-removebg-preview_mxghjp.png",
  },

  {
    name: "Sanjana Joshi",
    designation: "CDPC",
    imageUrl:
      "https://res.cloudinary.com/dcpugzrqm/image/upload/v1738919243/sanjana_j9a0xe.png",
  },

  {
    name: "Praneeta Shahankar",
    designation: "LR",
    imageUrl:
      "https://res.cloudinary.com/dcpugzrqm/image/upload/v1738919405/pranita-removebg-preview_jrhbdr.png",
  },

  {
    name: "Riya Singh",
    designation: "LR",
    imageUrl:
      "https://res.cloudinary.com/dcpugzrqm/image/upload/v1738919407/IMG_20250206_124908_-_RIYA_SINGH-removebg-preview_yv0vcm.png",
  },

  {
    name: "Veadant Halde",
    designation: "CR",
    imageUrl:
      "https://res.cloudinary.com/dcpugzrqm/image/upload/v1738919407/Picsart_25-02-06_12-52-34-718_-_Vedant_Halde-removebg-preview_1_ib8ogo.png",
  },

  {
    name: "Pralanshu Hedao",
    designation: "CR",
    imageUrl:
      "https://res.cloudinary.com/dcpugzrqm/image/upload/v1738919443/pra-removebg-preview_m8suzy.png",
  },

  {
    name: "Atharva Deshpande",
    designation: "Commitee Member",
    imageUrl:
      "https://res.cloudinary.com/dcpugzrqm/image/upload/v1738919674/Photo_Atharva_Deshpande_-_Atharva_Deshpande_div2_Rno_11-1-removebg-preview.png",
  },

  {
    name: "Ishita Shrivastava",
    designation: "LR",
    imageUrl:
      "https://res.cloudinary.com/dcpugzrqm/image/upload/v1738919677/formal_photo1_-_Ishita_Shrivastava-removebg-preview.png",
  },

  {
    name: "Ayan Sheikh",
    designation: "CR",
    imageUrl:
      "https://res.cloudinary.com/dcpugzrqm/image/upload/v1738988054/ayannobg_psezrl.jpg",
  },

  {
    name: "Akshita Bhange",
    designation: "Commitee Member",
    imageUrl:
      "https://res.cloudinary.com/dcpugzrqm/image/upload/v1738943581/IMG_20250206_142539_-_Akshita_Bhange_1_me4vmg.png",
  },

  {
    name: "Charu Nagtode",
    designation: "Commitee Member",
    imageUrl:
      "https://res.cloudinary.com/dcpugzrqm/image/upload/v1738943582/IMG_20250206_211444_-_Charu_Nagtode-removebg-preview_wnxoqr.png",
  },
  {
    name: "Shreya Shembhekar",
    designation: "Commitee Member",
    imageUrl:
      "https://res.cloudinary.com/dcpugzrqm/image/upload/v1738943582/IMG_20250206_131636_-_SHREYA_SHEMBEKAR-removebg-preview_gojght.png",
  },

  {
    name: "Prahi Ojha",
    designation: "Commitee Member",
    imageUrl:
      "https://res.cloudinary.com/dcpugzrqm/image/upload/v1738943582/IMG-20241205-WA0082_-_Prahi_Ojha-removebg-preview_dpuyb9.png",
  },

  {
    name: "Aashika Jain",
    designation: "Commitee Member",
    imageUrl:
      "https://res.cloudinary.com/dcpugzrqm/image/upload/v1738943582/IMG-20250206-WA0009_-_Aashika_Jain-removebg-preview_qyvocb.png",
  },

  {
    name: "Gargi Bisen",
    designation: "Commitee Member",
    imageUrl:
      "https://res.cloudinary.com/dcpugzrqm/image/upload/v1738943583/IMG-20250206-WA0022_-_Gargi_Bisen-removebg-preview_hz01fg.png",
  },

  {
    name: "Dhanashree Naik",
    designation: "Commitee Member",
    imageUrl:
      "https://res.cloudinary.com/dcpugzrqm/image/upload/v1738943583/1738595648676_-_Dhanashree_Digambar_Naik-removebg-preview_epe0qu.png",
  },

  {
    name: "Vedanti Kedar",
    designation: "Commitee Member",
    imageUrl:
      "https://res.cloudinary.com/dcpugzrqm/image/upload/v1738943582/IMG-20250118-WA0019_-_VEDANTI_KEDAR-removebg-preview_fplm05.png",
  },

  {
    name: "Shravani Tumram",
    designation: "Commitee Member",
    imageUrl:
      "https://res.cloudinary.com/dcpugzrqm/image/upload/v1738943582/IMG_20240921_195055_-_Shravani_Tumram-removebg-preview_zcmcnj.png",
  },

  {
    name: "Kirti Agrawal",
    designation: "Commitee Member",
    imageUrl:
      "https://res.cloudinary.com/dcpugzrqm/image/upload/v1738943583/Picsart_25-02-06_13-49-57-865_-_Kirti_Agrawal-removebg-preview_tcmeim.png",
  },

  {
    name: "Kalyani Biswas",
    designation: "Commitee Member",
    imageUrl:
      "https://res.cloudinary.com/dcpugzrqm/image/upload/v1738943583/formal_-_Kalyani_Biswajeet_Biswas-removebg-preview_yuqiox.png",
  },

  {
    name: "Vipul Rakshit",
    designation: "Commitee Member",
    imageUrl:
      "https://res.cloudinary.com/dcpugzrqm/image/upload/v1738943583/DSC_0057__-_Vipul_Rakshit-removebg-preview_vfgsmq.png",
  },

  {
    name: "Nikesh Singhane",
    designation: "Commitee Member",
    imageUrl:
      "https://res.cloudinary.com/dcpugzrqm/image/upload/v1738943584/IMG_20250206_194356-min_-_Nikesh_Shingne_zhwfb8.jpg",
  },

  {
    name: "Shruti Chinchalkar",
    designation: "Commitee Member",
    imageUrl:
      "https://res.cloudinary.com/dcpugzrqm/image/upload/v1738945482/WhatsApp_Image_2025-02-06_at_22.22.52_4a009e70_-_Shruti_Chinchalkar-removebg-preview_ua32jx.png",
  },

  {
    name: "Sampada Ingle",
    designation: "Commitee Member",
    imageUrl:
      "https://res.cloudinary.com/dcpugzrqm/image/upload/v1738945630/WhatsApp_Image_2025-02-07_at_2.59.23_PM-removebg-preview_da0z8d.png",
  },
  {
    name: "Akshay Singh",
    designation: "IQAC Head",
    imageUrl:
      "https://res.cloudinary.com/dcpugzrqm/image/upload/v1738945966/863C7AF9-25C1-4A8E-8838-20256283D3A5_-_AKSHAY_SINGH__1_-removebg-preview_iidbui.png",
  },
  {
    name: "Madhavendra Purohit",
    designation: "Refreshment Head",
    imageUrl:
      "https://res.cloudinary.com/dcpugzrqm/image/upload/v1738946189/IMG-20240312-WA0026-removebg-preview_fvv2us.png",
  },
  {
    name: "Abhishek mathnere",
    designation: "Treasurer",
    imageUrl:
      "https://res.cloudinary.com/dcpugzrqm/image/upload/v1738947045/WhatsApp_Image_2025-02-07_at_10.06.00_PM-removebg-preview_pz8yvm.png",
  },
];

const Members = () => {
    // Initialize AOS
    useEffect(() => {
        AOS.init({
            duration: 1500, // Animation duration
        });
    }, []);

    return (
        <div className="p-6 mt-[5rem]">
            {/* "Our Leads" section with 2 cards per row */}
            <div className="mb-12 pb-8 flex flex-col">
                <h2 className="text-center mt-8 mb-12 font-custom leading-relaxed">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r  from-blue-500 via-indigo-500 to-purple-500 font-extrabold text-6xl block">
                        OUR <span className="font-extrabold">CREATIVITY</span>{" "}
                        {/* Combined and styled */}
                    </span>
                    <br />
                    <span className="text-white text-4xl block">
                        {" "}
                        {/* Second line smaller and not bold */}
                        and attention to detail are
                    </span>
                    <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 font-extrabold text-6xl block">
                        TRULY INSPIRING. {/* Third line styled like first */}
                    </span>
                </h2>
                <h2 className="text-5xl font-extrabold text-center mt-32 mb-12 font-custom">
                    {" "}
                    {/* Added custom font class */}
                    <span className="bg-clip-text text-transparent text-white">
                        OUR
                    </span>
                    <span className="bg-clip-text text-blue-500 ml-2">
                        LEADS
                    </span>
                </h2>
                <div className="flex flex-wrap justify-center gap-4 pl-6 pr-6">
                    <ProfileCard
                        name={"Pratik Amnerkar"}
                        designation={"President"}
                        imageUrl={
                            "https://res.cloudinary.com/dcpugzrqm/image/upload/v1738862124/Pratik_Amnerkar_President_fby7cv.png"
                        }
                    />
                </div>
            </div>
            <div
                className="flex justify-center items-center mb-20"
                data-aos="fade-up"
            >
                <div className="flex flex-wrap justify-evenly gap-28 pl-6 pr-6">
                    <ProfileCard
                        name={"Sankalp Singh"}
                        designation={"Vice President MCA"}
                        imageUrl={
                            "https://res.cloudinary.com/dcpugzrqm/image/upload/v1738862125/Sankalp_Singh_Vice_President_MCA_I_yr_g4rzq6.png"
                        }
                    />
                    <ProfileCard
                        name={"Priyanshi Jha"}
                        designation={"Vice President BCA"}
                        imageUrl={
                            "https://res.cloudinary.com/dcpugzrqm/image/upload/v1738862143/vice_president_BCA_u84jfw.png"
                        }
                    />
                </div>
            </div>

            {/* Other members (responsive grid) */}
            <div className="mb-10" data-aos="fade-up">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8 justify-center">
                    {members
                        .filter((member) => member.designation !== "Our Lead")
                        .map((member, idx) => (
                            <div
                                key={idx}
                                className="flex flex-wrap justify-center mb-6 sm:mb-8 md:mb-10"
                                data-aos="fade-up"
                                data-aos-delay={idx * 100}
                            >
                                <ProfileCard
                                    name={member.name}
                                    designation={member.designation}
                                    imageUrl={member.imageUrl}
                                />
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Members;
